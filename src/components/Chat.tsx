import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
} from "@mui/material";
import { ReactComponent as SendIcon } from "../send.svg";
import { ReactComponent as SearchIcon } from "../search.svg";
import { ReactComponent as DeleteIcon } from "../btn-link.svg";

// import { OpenAIApi } from 'openai';

// const openaiClient = new OpenAIApi('YOUR_API_KEY');

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setMessages((prevMessages) => [
      ...prevMessages
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (!input) return;

    setMessages((prevMessages) => [...prevMessages, `You: ${input}`]);
    setInput("");

    // try {
    //   const response = await openaiClient.complete({
    //     engine: 'davinci',
    //     prompt: input,
    //     maxTokens: 50, // Configure the maxTokens parameter here
    //     temperature: 0.6,
    //     n: 1,
    //     stop: '\n',
    //   });

    //   const reply = response.choices[0].text.trim();

    //   setMessages((prevMessages) => [...prevMessages, `Bot: ${reply}`]);
    // } catch (error: any) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <div style={{ padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Content for the first column */}
          <Paper elevation={2} style={{ marginBottom: 5 }}>
            <Box p={2}>
              <h1>Sistema</h1>
              <div style={{ color: "#64748B" }}>
                Para conseguir una respuesta adecuada a tus necesidades, escribe
                un prompt para el sistema.
              </div>
              <TextField
                fullWidth
                placeholder="Insertar prompt"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SendIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Paper>
          <Paper elevation={2}>
            <Box p={2}>
              <h1>Historial de Búsquedas</h1>
              <Divider />

              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="User Flow"
                    secondary="Hoy, quedan 24 hs."
                  />
                  <IconButton edge="end" color="inherit" aria-label="right">
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="User Flow2"
                    secondary="Hoy, quedan 12 hs."
                  />
                  <IconButton edge="end" color="inherit" aria-label="right">
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Content for the second column */}
          <Paper elevation={2}>
            <Box p={2}>
              <h1>OdamaChat</h1>
              <Divider />
              {messages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
              <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                label="User Input"
              />
              <Button variant="contained" onClick={handleSendMessage}>
                Send
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
