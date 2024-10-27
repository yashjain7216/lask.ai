import React, { useState } from 'react';
import '../styles/Guide.css'; // Assuming you have this CSS file
import install from '../assets/install.png'; // Adjust path based on your structure
import extn from '../assets/extn.png'; // Adjust path based on your structure

const UserGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Installation Steps',
      content: (
        <>
          <p>Follow these steps to install the VS Code extension:</p>
          <ul>
            <li>Open your Visual Studio Code.
            {/* <img src="installation_image.png" alt="Installation Steps" className="content-image" /> */}
            </li>
            <li>Go to the Extensions view.
            </li>

            <li>Search for "LASK.AI".
            <img src={install} alt="Installation Steps" className="content-image" />
            </li>

            <li>Click "Install".</li>
            <li>Reload VS Code to use the extension.</li>

            <li>The LASK.AI will appear in extensions.
            <img src={extn} alt="Installation Steps" className="content-image" />
            </li>

          </ul>
        </>
      ),
    },
    {
      title: 'General Usage',

    //   "keybindings": [
    //   {
    //     "command": "extension.inlineChat",
    //     "key": "ctrl+shift+i",
    //     "mac": "cmd+shift+i",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "aiChatbot.nlpGenerateCode",
    //     "key": "alt+b",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "insertCodeSuggestion",
    //     "key": "tab",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "insertCodeSuggestion",
    //     "key": "tab",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "codeGenerator.acceptCode",
    //     "key": "ctrl+shift+a",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "codeGenerator.nextSuggestion",
    //     "key": "alt+]",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "codeGenerator.previousSuggestion",
    //     "key": "alt+[",
    //     "when": "editorTextFocus"
    //   },
    //   {
    //     "command": "codeGenerator.openSuggestionBox",
    //     "key": "alt+shift+s",
    //     "when": "editorTextFocus"
    //   }
    // ],

//     Alt+b :nlp code generation 
// Alt+enter accept code
// Alt+c comment 
// Alt+f fix code


      content: (
        <>
          <p>Follow these steps to use LASK.AI effectively:</p>
          <ul>
            <li>Open any project in which you need assistance.</li>
            <li>LASK.AI automatically loads the entire current directory in the form of context, thus making it readily available for use!</li>

            <li>LASK comes with several shortcuts that make the task easier.</li>
            <ul>
                <li>Use <b>ctrl+shift+i</b> to open the LASK.AI's inline chat window. </li>
                <li>Use <b>alt+b</b> to access the Code Generation feature on the go. </li>
                <li>To accept the code suggestions simple press the <b>alt+enter</b> key. </li>
                <li>To insert the generated code snippet in the file, use <b>tab</b> key. </li>
                <li>Pressing on the combination of <b>alt+shift+s</b> opens up the codesuggestion box.</li>
                <li>Simply use <b>alt+]</b> to jump onto next code suggestion and use <b>alt+[</b> to jump back to previous code suggestion.</li>

                <li>To fix syntax errors, use <b>alt+f</b></li>
                <li>Use <b>alt+c</b> combination to generate comments for the selected code snippet/file.</li>

            </ul>
            {/* <li>Use auto-completion to speed up your coding process.</li> */}
          </ul>
          {/* <img src="usage_image.png" alt="General Usage" className="content-image" /> */}
        </>
      ),
    },
    // {
    //   title: 'Features',
    //   content: (
    //     <>
    //       <p>LASK.AI provides a range of features:</p>
    //       <ul>
    //         <li>Real-time code suggestions.</li>
    //         <li>Code generation and refactoring.</li>
    //         <li>Error detection and fixes.</li>
    //       </ul>
    //       <img src="features_image.png" alt="Features Overview" className="content-image" />
    //     </>
    //   ),
    // },
  ];

  return (
    <div className="user-guide-container">
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${activeStep === index ? 'active' : ''}`}
            onClick={() => setActiveStep(index)}
          >
            <div className={`step-number ${activeStep === index ? 'active-number' : ''}`}>
              {index + 1}
            </div>
            <div className="step-title">{step.title}</div>
          </div>
        ))}
      </div>

      <div className="step-content">
        {steps[activeStep] && (
          <>
            <h2>{steps[activeStep].title}</h2>
            {steps[activeStep].content}
          </>
        )}
      </div>
    </div>
  );
};

export default UserGuide;
