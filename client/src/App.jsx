// import { useState } from 'react';
// import './App.css';
// import axios from 'axios'

// const YOU = 'you';
// const AI = 'ai';


// function App() {
//   const inputRef = useRef();
//   const [qna, setQna] = useState([
//     // { from: YOU, value: 'FROM ME' },
//     // { from: AI, value: ['1message from ai', "2 message from AI"]},
//     // { from: YOU, value: ['1 message from ai', "2 message from YOU"]},
//   ]);
  
//   const[loading, setLoading] = useState(false);

//   const updateQNA = (from, value) => {
//     setQna((qna) =>[...qna,   { from, value }]);

//   }

//   const handleSend = () => {
//     const question = inputRef.current.value;
//     updateQNA(YOU, question);
    
//     setLoading(true);
//     axios.post("http://localhost:3000/chat",{
//       question,
//     }),then((response) => {

//     updateQNA(AI, response.data.answer);

//     }).finally(() => {
//       setLoading(false);
//     })
//   };

//   const renderContent = (qna) => {
//     const value = qna.value;

//     if (Array.isArray(value)) {
//       return value.map((v) => <p className="message-text">{v}</p>)
//     }
//     return <p className="message-text">{value}</p>;
//   }
//   return (
//     <main className="container">


//       <div className="chats">
//         {
//           qna.map(qna => {
//             if (qna.from === YOU) {
//               return (
//                 <div className="send chat">

//                   <p>Hi bot</p>
//                   <p> {renderContent(qna)}</p>
//                 </div>

//               );
//             }
//             return (

//               <div className="recieve chat">
//                 {/* <p>Hello Human</p> */}
//                 <p> {renderContent(qna)}</p>
//               </div>
//             )
//           })
//         }
//         {
//           loading && (
            
//             <div className="recieve chat">
//             {/* <p>Hello Human</p> */}
//             <p> {renderContent(qna)}</p>
//           </div>
//           )
//         }

//         <div className="chat-input">
//           <input type="text" ref={inputRef}
//             className="form-control col"
//             placeholder="Typing.. ." />

//           <button disabled={loading} className="btn btn-success" onClick={handleSend}>Send</button>
//         </div>
//       </div>

//     </main>
//   )
// }

// export default App;
import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

const YOU = "you";
const AI = "ai";
function App() {
  const [inputValue, setInputValue] = useState('');



  const inputRef = useRef();
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  const handleSend = () => {
   
    const question = inputRef.current.value;
    updateQNA(YOU, question);

    setLoading(true);
    axios
      .post("http://localhost:3000/chat", {
        question,
      })
      .then((response) => {
        updateQNA(AI, response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderContent = (qna) => {
    const value = qna.value;

    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }

    return <p className="message-text">{value}</p>;
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input value
    // ...
    // Clear the input field
    setInputValue('');
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
     
  return (
    <>
    <h1 className="Heading">AI Chat Boat</h1>
    <main class="container">
      <div class="chats">
        {qna.map((qna) => {
          if (qna.from === YOU) {
            return (
              <div class="send chat">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                  alt=""
                  class="avtar"
                />
                <p>{renderContent(qna)}</p>
              </div>
            );
          }
          return (
            <div class="recieve chat">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                alt=""
                class="avtar"
              />
              <p>{renderContent(qna)}</p>
            </div>
          );
        })}

        {loading && (
          <div class="recieve chat">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              alt=""
              class="avtar"
            />
            <p>Typing...</p>
          </div>
        )}
      </div>

      <div class="chat-input">
        <input
          type="text"
          ref={inputRef}
          value={inputValue} 
          onChange={handleInputChange} 
          class="form-control col"
          placeholder="Type Something"
        />
        <button disabled={loading} class="btn btn-success" onClick={handleSend}>
          Send
        </button>
        <button  class="btn btn-success" onSubmit={handleSubmit}>
          reset
        </button>
      </div>
    </main>
    </>
  );
}

export default App;


// // ...



// // ...

// <input value={inputValue} onChange={e => setInputValue(e.target.value)} />

// <button onClick={handleSubmit}>Submit</button>
// import React, { useState } from 'react';

// function MyForm() {
//   const [inputValue, setInputValue] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the input value
  //   // ...
  //   // Clear the input field
  //   setInputValue('');
  // }

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;


