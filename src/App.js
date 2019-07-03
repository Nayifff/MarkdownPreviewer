import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';


let marked = require('marked');


class App extends Component { 
constructor() {
    super();
this.state = { 
    markdown: `# Welcome to my React Markdown Previewer!
---------
## This is a sub-heading...
---------
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**, _italic_, or **_both!_**
And yes you can ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
>>> "Block Quotes!"


1. And there are numbererd lists too.
2. and 2. as well!

* bullet points!
---------
`
}
}


updateMarkdown = function(value) { 
this.setState({markdown: value});
}

    render() { 

  return (
    <div className="App container">
    <div> 
          <FormGroup controlId="formControlsTextarea exampleForm.ControlTextarea1 editor"> 
        <FormLabel> 
              
              Editor Input: 
              </FormLabel>
              <FormControl as="textarea" rows="8" value={this.state.markdown} componentclass="textarea" placeholder="Enter Your Markdown in Here" onChange={(event) => this.updateMarkdown(event.target.value)}>
              
                  
              
              </FormControl>
        
        </FormGroup>
          
          </div>
          
          
          <div> 
          <FormLabel> 
              
              Previewer: 
              </FormLabel>
          <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}} controlid="editor"> 
              
              
              
              </div>
          
          </div>
    </div>
  );
}
}

    
export default App;