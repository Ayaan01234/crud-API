import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, edit, fetchTodos } from "../features/todos/todoSlice";

const ListItemData = ({ todo }) => {
  const { isSuccess } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteTodo(_id));
    if (isSuccess) {
      dispatch(fetchTodos());
    }
  };

  const handleEdit = (todo) => {
    dispatch(edit(todo));
  };

  return (
    <>
      <ListItem>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography variant="h4">{todo.title}</Typography>
          <Typography variant="body1">{todo.description}</Typography>
        </Box>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => handleEdit(todo)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleDelete(todo._id)}
        >
          Delete
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListItemData;
