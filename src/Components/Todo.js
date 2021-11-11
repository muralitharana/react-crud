import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "./Todo.css";
import { useState } from "react";

const Status = [
  {
    value: "Inprogress",
    label: "Inprogress",
  },
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "Completed",
    label: "Completed",
  },
];

function Todo(props) {
  const [tableToggle, setTableToggle] = useState(false);
  const [todo, setTodo] = useState({
    taskName: "",
    status: "",
    note: "",
    edited: false,
  });

  const [newTodo, setNewTodo] = useState([]);
  const [editedIndex, setEditedIndex] = useState(0);
  const [buttonToggle, setButtonToggle] = useState({
    cancelButtonToggle: false,
    addOrUpdate: "Add",
  });
  const changeHandler = (event) => {
    const newAttr = event.target.name;
    const newValue = event.target.value;
    setTodo({
      ...todo,
      [newAttr]: newValue,
    });
  };
  const addNewTodo = () => {
    if (
      todo.taskName !== "" &&
      todo.status !== "" &&
      todo.note !== "" &&
      todo.edited === false
    ) {
      console.log(todo);
      setTableToggle(true);
      setNewTodo([...newTodo, todo]);
    } else if (todo.edited === true) {
      newTodo.splice(editedIndex, 1, todo);
      setNewTodo([...newTodo]);
      setButtonToggle({
        cancelButtonToggle: false,
        addOrUpdate: "Add",
      });
    } else {
      return false;
    }

    setTodo({
      taskName: "",
      status: "",
      note: "",
      edited: false,
    });
  };

  const deleteTodo = (index) => {
    newTodo.splice(index, 1);
    setNewTodo([...newTodo]);
    if (newTodo.length === 0) {
      setTableToggle(false);
    }
  };

  const editTodo = (index) => {
    setTodo({
      taskName: newTodo[index].taskName,
      status: newTodo[index].status,
      note: newTodo[index].note,
      edited: true,
    });
    setEditedIndex(index);
    setButtonToggle({
      cancelButtonToggle: true,
      addOrUpdate: "update",
    });
  };

  const cancelUpdate = () => {
    setTodo({
      taskName: "",
      status: "",
      note: "",
      edited: false,
    });
    setButtonToggle({
      cancelButtonToggle: false,
      addOrUpdate: "Add",
    });
  };
  return (
    <>
      <div style={{textAlign:"end"}}>
        <Button onClick={() => props.history.push("./Home")}><HomeOutlinedIcon/></Button>
      </div>
      <h2>Todo</h2>
      <div className="todoForm">
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 0,
              width: "100%",
              marginTop: 1,
              marginBottom: 1,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Task Name"
            variant="filled"
            name="taskName"
            value={todo.taskName}
            onChange={changeHandler}
          />
          <TextField
            style={{ textAlign: "left" }}
            id="filled-select-currency"
            select
            name="status"
            label="Status"
            value={todo.status}
            onChange={changeHandler}
            variant="filled"
          >
            {Status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="filled-basic"
            label="Note"
            variant="filled"
            name="note"
            value={todo.note}
            onChange={changeHandler}
          />
        </Box>
        <div style={{ textAlign: "right" }}>
          {buttonToggle.cancelButtonToggle && (
            <Button onClick={cancelUpdate}>Cancel</Button>
          )}
          <Button onClick={addNewTodo} variant="contained">
            {buttonToggle.addOrUpdate}
          </Button>
        </div>
      </div>
      {tableToggle && (
        <div style={{ overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            {newTodo.map((value, index) => (
              <tbody key={value.taskName}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{value.taskName}</td>
                  <td>{value.status}</td>
                  <td>{value.note}</td>
                  <td>
                    <Button
                      style={{ color: "red" }}
                      onClick={() => deleteTodo(index)}
                    >
                      <DeleteForeverIcon />
                    </Button>
                    <Button onClick={() => editTodo(index)}>
                      <EditOutlinedIcon />
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </>
  );
}

export default Todo;
