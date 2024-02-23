import { LinearProgress, List, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ListItemData from "./ListItemData";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todos/todoSlice";

const ListGroup = () => {
  const dispatch = useDispatch();

  const { todos, isLoading, isError, isSuccess } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (isLoading) {
    return <LinearProgress color="warning" />;
  }

  if (isError) {
    return (
      <Typography sx={{ margin: "20px 0px" }} variant="h4" align="center">
        Something Went Wrong..
      </Typography>
    );
  }

  if (todos.length === 0) {
    return (
      <Typography sx={{ margin: "20px 0px" }} variant="h4" align="center">
        No Todos Yet..
      </Typography>
    );
  }

  return (
    <List sx={{ margin: "20px 0px" }}>
      {todos.map((todo) => (
        <ListItemData key={todo._id} todo={todo} />
      ))}
    </List>
  );
};

export default ListGroup;
