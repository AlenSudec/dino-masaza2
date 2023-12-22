
import React, { useState, useEffect, useContext } from 'react';
import { GlobalStateContext } from '../layouts/MainLayout';
import { render } from '@testing-library/react';


export const EditableComponent = ({ children, initState}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [componentState, setComponentState] = useState(initState)

    const renderChild = typeof children === 'function' ? children : () => null;

    const setGlobalState = React.useContext(GlobalStateContext);

    if(isEditable){
        return <div>{mapRecursively(componentState, setComponentState, [])}<button onClick={() => {setIsEditable(false); setComponentState(initState); setGlobalState({})}}>Cancel</button><button onClick={() => {setGlobalState({ footerLinks: componentState }); setIsEditable(false)}}>Preview</button></div>
    }

    return <>
    {renderChild(componentState)}
    <button onClick={() => { setIsEditable(true) }}>Edit</button></>
  };
  
  function mapRecursively(item, setComponentState, path) {
    const objectToArray = Object.entries(item);
  
    return objectToArray.map(([key, value], index) => {
      const currentPath = [...path, key];
    console.log(key,value, path)
    
    if(key === "id"){
        return null;
      }
      if (typeof value === 'string' || typeof value === 'number') {
        return (
          <Input
            key={currentPath.join('-')}
            value={value}
            inputName={key}
            onChange={(newValue) => setComponentState((prevState) => updateState(prevState, currentPath, newValue))}
          />
        );
      }

  
      return mapRecursively(value, setComponentState, currentPath);
    });
  }
  
  function updateState(prevState, path, newValue) {
    const newState = deepClone(prevState); // Deep clone to avoid mutating the original state
    let currentLevel = newState;
  
    for (let i = 0; i < path.length - 1; i++) {
      if (!currentLevel[path[i]]) {
        currentLevel[path[i]] = Array.isArray(path[i + 1]) ? [] : {}; // Create an array or object if it doesn't exist
      }
      currentLevel = currentLevel[path[i]];
    }
  
    currentLevel[path[path.length - 1]] = newValue;
  
    return newState;
  }
  
  const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
  
  const Input = ({ value, onChange, inputName }) => {
    const handleChange = (e) => {
      const newValue = e.target.value;
      onChange(newValue);
    };
  
    return <div>
            <label>{inputName}</label>
            <input type="text" value={value} onChange={handleChange} />
        </div>
  };



// function mapRecursivly(item, setComponentState, componentState) {

//     const objectToArray = Object.values(item);

//     return objectToArray.map(item => {
//         if (typeof item === "string" || typeof item === "number") {
//             return <Input item={item} setComponentState={setComponentState}/>
//         }
//         return mapRecursivly(item, setComponentState);
//     })
// }

// function searchTroughEntries(entry, value){
//     const entry = entry.findIndex((item) => item === value);
//     if(entry){}
// }

// function Input({item, setComponentState}){
//     // const [inputValue, setInputValue] = useState(item);

//     const updateComponent =() => {
//         setComponentState(function map(prevState){
//             console.log(prevState);
//             console.log(item)//value

//             const toArray = Object.entries(prevState);
//             console.log(toArray)

//             // const entry = toArray.findIndex((value) => )
//             // const index = toArray.findIndex((value) => value === item);
//             // console.log(index);
//             // toArray[index] = item;
//             // Object.from
//             return prevState
//         })
//     }

//     return <input value={item} onChange={(e) => updateComponent(e.target.value)} />
// }


// export const EditableComponent = ({ children, componentState, setComponentState }) => {

//     //component state should only change when preview
//     const [editableData, setEditableData] = useState(componentState);

//     const [isEditable, setIsEditable] = useState(false);
    

//     if (isEditable) {
//         console.log(componentState)
//         const updateComponentState = () => {
//             // setComponentState(componentState)
//             setIsEditable(false)
//         }

//         return <div>
//             {mapRecursivly(componentState, setComponentState, componentState)}
//             <button onClick={updateComponentState}>Preview</button>
//         </div>
//     }

//     return <>{children}<button onClick={() => { setIsEditable(true) }}>Edit</button></>
// }



// export const EditableComponent = ({ children }) => {
//     const [editableContent, setEditableContent] = useState(null);
//     const [editEnabled, setEditEnabled] = useState(false);
//     const [elementState, setElementState] = useState([])
//     const [previewEnabled, setPreviewEnabled] = useState(false);

//     const setGlobalState = React.useContext(GlobalStateContext);

//     // const handleInputChange = (e, key) => {
//     //     // Update the state with the new input value
//     //     setElementState((prevElementState) => ({
//     //         ...prevElementState,
//     //         [key]: e.target.value,
//     //     }));
//     // };

//     useEffect(() => {
//         //fill state with component data
//         if (editEnabled) {

//             const elementsWithText = [];

//             const getElementData = (child) => {
//                 return React.Children.map(child, (nestedChild) => {
//                     if (React.isValidElement(nestedChild) && nestedChild.props['data-tag'] === 'editable' && typeof nestedChild.props.children === "string") {

//                         elementsWithText.push({
//                             value: nestedChild.props.children,
//                             label: nestedChild.props.label,
//                             key: nestedChild.key
//                         });
//                     } else if (React.isValidElement(nestedChild) && nestedChild.props['data-tag'] === 'editable' && nestedChild.type == "a") {
//                         //anchor element
//                         //label and text
//                         elementsWithText.push({
//                             value: nestedChild.props.href,
//                             label: nestedChild.props.label,
//                             key: nestedChild.key
//                         });
//                         //anchor child element
//                         if (nestedChild.props.children.props.children) {
//                             elementsWithText.push({ value: nestedChild.props.children.props.children, label: "Text", key: nestedChild.props.children.key })
//                         } else if (nestedChild.props.children.props.item) {
//                             elementsWithText.push({
//                                 value: nestedChild.props.children.props.item.icon,
//                                 label: "Text", key: nestedChild.props.children.key
//                             })
//                         }
//                     }
//                     else if (React.isValidElement(nestedChild) && nestedChild.props.children) {
//                         getElementData(nestedChild.props.children);
//                     }
//                 })
//             }

//             getElementData(children);

//             console.log(elementsWithText);
//             setElementState(elementsWithText)
//         }
//     }, [children, editEnabled])



//     const handleInputChange = (e, key) => {
//         // Update the state with the new input value
//         const index = elementState.findIndex(e => e.key == key);

//         const elements = elementState.map(i => i)
//         elements[index] = {
//             ...elementState[index],
//             value: e.target.value
//         }
//         setElementState(elements);
//     };

//     useEffect(() => {
//         if (previewEnabled) {
//             const replaceEditableElements = (child) => {
//                 return React.Children.map(child, (nestedChild) => {
//                     if (React.isValidElement(nestedChild) && nestedChild.props['data-tag'] === 'editable') {
//                         let childElement = null;
//                         const element = elementState.find((e, i) => { if (e.key === nestedChild.key) { childElement = elementState[i + 1]; return e; } });
//                         if (element && nestedChild.type == "a") {
//                             console.log(nestedChild)
//                             // const childElement = element[]
//                             return React.cloneElement(nestedChild, {
//                                 //this is set right in dom tree, but on anchor element click it does not redirect to correct value
//                                 href: element.value,
//                                 children: React.cloneElement(nestedChild.props.children, {
//                                     // value: childElement.value
//                                     children: childElement.value
//                                 })
//                             })
//                         } else if (element) {
//                             return React.cloneElement(nestedChild, {
//                                 children: element.value
//                             })
//                         }
//                         return React.cloneElement(nestedChild, {
//                             key: nestedChild.key || 'editable', // Ensure a unique key
//                         });
//                     } else if (React.isValidElement(nestedChild) && nestedChild.props.children) {
//                         // Recursively handle nested children
//                         return React.cloneElement(nestedChild, {
//                             key: nestedChild.key || 'nested', // Ensure a unique key
//                             children: replaceEditableElements(nestedChild.props.children),
//                         });
//                     }
//                     return nestedChild;
//                 });
//             };

//             const updatedContent = replaceEditableElements(children);
//             console.log(updatedContent);
//             setEditableContent(updatedContent);
//             setGlobalState({ footerLinks: elementState })
//         }
//     }, [previewEnabled])

//     if (previewEnabled) {
//         return <>{editableContent}<button onClick={() => setPreviewEnabled(false)}>Cancel</button></>;
//     }


//     if (editEnabled) {
//         return <div>
//             {elementState.map(element => <div key={element.key}>
//                 <div>
//                     <label>{element.label}</label>
//                 </div>
//                 <div>
//                     <input type='text' value={element.value} onChange={(e) => handleInputChange(e, element.key)} />
//                 </div>
//             </div>)}
//             <button onClick={() => setPreviewEnabled(true)}>Preview</button><button onClick={() => setEditEnabled(false)}>Cancel</button>
//         </div>
//     }

//     return <>{children}<button onClick={() => setEditEnabled(true)}>Edit</button></>;
// };