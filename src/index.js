export const Questions = [
    {
        id:1,
        question: "What does JSX stand for?",
        answers: [
            {
                options: "JavaScript XML",
                correct: true,
            },
            {
                options: "JavaScript Extensible",
                correct: false,
            },
            {
                options: "Java XML",
                correct: false,
            },
            {
                options: "JavaX",
                correct: false,
            },
        ]
    },
    {
        id:2,
        question: "Which method is used to change the state in React?",
        answers: [
            {
                options: "this.setState()",
                correct: true,
            },
            {
                options: "this.stateChange()",
                correct: false,
            },
            {
                options: "updateState()",
                correct: false,
            },
            {
                options: "modifyState()",
                correct: false,
            },
        ]
    },
    {
        id:3,
        question: "What is React used for?",
        answers: [
            {
                options: "JServer-side scripting",
                correct: false,
            },
            {
                options: "Building user interfaces",
                correct: true,
            },
            {
                options: "Database management",
                correct: false,
            },
            {
                options: "Networking",
                correct: false,
            },
        ]
    },
    {
        id:4,
        question: "What is the virtual DOM in React?",
        answers: [
            {
                options: "A lightweight version of the actual DOM",
                correct: false,
            },
            {
                options: "An in-memory representation of the real DOM elements",
                correct: true,
            },
            {
                options: "A programming language used in React",
                correct: false,
            },
            {
                options: "A component used for routing",
                correct: false,
            },
        ]
    },
    {
        id:5,
        question: "How can you prevent a component from rendering in React?",
        answers: [
            {
                options: "By using conditional rendering",
                correct: true,
            },
            {
                options: "By removing the component from the DOM manually",
                correct: false,
            },
            {
                options: "By using the preventDefault() method",
                correct: false,
            },
            {
                options: "By setting the render attribute to false",
                correct: false,
            },
        ]
    },
    {
        id:6,
        question: "What is prop drilling in React?",
        answers: [
            {
                options: "Passing data from child to parent components",
                correct: false,
            },
            {
                options: "Passing data between sibling components",
                correct: false,
            },
            {
                options: "Passing data between unrelated components",
                correct: false,
            },
            {
                options: "Passing data from parent to child components",
                correct: true,
            },
        ]
    },
    {
        id:7,
        question: "What is Redux used for in React?",
        answers: [
            {
                options: "Routing",
                correct: false,
            },
            {
                options:  "Styling",
                correct: false,
            },
            {
                options: "State management",
                correct: true,
            },
            {
                options: "Authentication",
                correct: false,
            },
        ]
    },
    {
        id:8,
        question: "What is the purpose of the useEffect hook in React?",
        answers: [
            {
                options: "To manage component state",
                correct: false,
            },
            {
                options: "To perform side effects in functional components",
                correct: true,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To create custom hooks",
                correct: false,
            },
        ]
    },
    {
        id:9,
        question: "What is the purpose of the useMemo hook in React?",
        answers: [
            {
                options: "To memoize the output of a function",
                correct: true,
            },
            {
                options: "To create a new component",
                correct: false,
            },
            {
                options: "To update the component state",
                correct: false,
            },
            {
                options: "To handle asynchronous operations",
                correct: false,
            },
        ]
    },
    {
        id:10,
        question: "What is the purpose of the useCallback hook in React?",
        answers: [
            {
                options: "To create a new component",
                correct: false,
            },
            {
                options: "To update the component state",
                correct: false,
            },
            {
                options: "To handle asynchronous operations",
                correct: false,
            },
            {
                options: "To memoize the output of a function",
                correct: true,
            },
        ]
    },
    {
        id:11,
        question: "What is a controlled component in React?",
        answers: [
            {
                options: "A component with controlled access",
                correct: false,
            },
            {
                options: "A component that is controlled by a function",
                correct: true,
            },
            {
                options: "A component that does not have state",
                correct: false,
            },
            {
                options: "A component whose state is controlled by React",
                correct: false,
            },
        ]
    },
    {
        id:12,
        question: "WWhat is the purpose of the useContext hook in React?",
        answers: [
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options: "To consume context values",
                correct: true,
            },
            {
                options: "To update the component state",
                correct: false,
            },
            {
                options: "To handle asynchronous operations",
                correct: false,
            },
        ]
    },
    {
        id:13,
        question: "What is JSX in React?",
        answers: [
            {
                options:  "A syntax extension for JavaScript recommended by React",
                correct: true,
            },
            {
                options:  "A JavaScript library for building user interfaces",
                correct: false,
            },
            {
                options:  "A build tool for optimizing React applications",
                correct: false,
            },
            {
                options:  "A package manager for React",
                correct: false,
            },
        ]
    },
    {
        id:14,
        question: "What is the purpose of the useRef hook in React?",
        answers: [
            {
                options: "To manage component state",
                correct: false,
            },
            {
                options: "To create references to DOM elements",
                correct: true,
            },
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options: "To handle user events",
                correct: false,
            },
        ]
    },
    {
        id:15,
        question: "What is the purpose of the forwardRef function in React?",
        answers: [
            {
                options: "To forward data between sibling components",
                correct: false,
            },
            {
                options: "To create a new component",
                correct: true,
            },
            {
                options: "To create references to DOM elements",
                correct: false,
            },
            {
                options: "To manage component state",
                correct: false,
            },
        ]
    },
    {
        id:16,
        question: "What is the purpose of the useReducer hook in React?",
        answers: [
            {
                options: "To create a reducer function",
                correct: false,
            },
            {
                options:  "To consume context values",
                correct: false,
            },
            {
                options: "To manage component state",
                correct: true,
            },
            {
                options: "To handle asynchronous operations",
                correct: false,
            },
        ]
    },
    {
        id:17,
        question: "What is the purpose of the withRouter HOC in React?",
        answers: [
            {
                options: "To style React components",
                correct: false,
            },
            {
                options: "To connect components to a Redux store",
                correct: false,
            },
            {
                options: "To provide access to the router props",
                correct: true,
            },
            {
                options: "To create higher-order components",
                correct: false,
            },
        ]
    },
    {
        id:18,
        question: "What is the purpose of the render prop pattern in React?",
        answers: [
            {
                options: "To render components conditionally",
                correct: false,
            },
            {
                options: "To pass data between parent and child components",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options: "To provide a function as a child to a component",
                correct: true,
            },
        ]
    },
    {
        id:19,
        question: "What is the purpose of the componentDidCatch method in React?",
        answers: [
            {
                options: "To catch JavaScript errors anywhere in the component tree",
                correct: true,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options:  "To update the component state",
                correct: false,
            },
        ]
    },
    {
        id:20,
        question: "What is the purpose of the shouldComponentUpdate method in React?",
        answers: [
            {
                options: "To determine if a component should be re-rendered",
                correct: true,
            },
            {
                options: "To update the component state",
                correct: false,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
        ]
    },
    {
        id:21,
        question: "What is the purpose of the dangerouslySetInnerHTML prop in React?",
        answers: [
            {
                options: "To prevent XSS attacks",
                correct: false,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To set HTML directly from React",
                correct: true,
            },
            {
                options: "To create context providers",
                correct: false,
            },
        ]
    },
    {
        id:22,
        question: "What is the purpose of the PureComponent in React?",
        answers: [
            {
                options: "To create a pure function component",
                correct: false,
            },
            {
                options: "To optimize performance by preventing unnecessary renders",
                correct: true,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
        ]
    },
    {
        id:23,
        question: "What is the purpose of the componentWillUnmount method in React?",
        answers: [
            {
                options: "To update the component state",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options: "To perform cleanup before a component is removed from the DOM",
                correct: true,
            },
            {
                options: "To handle user events",
                correct: false,
            },
        ]
    },
    {
        id:24,
        question: "What is the purpose of the componentDidUpdate method in React?",
        answers: [
            {
                options: "To perform actions after a component has been updated",
                correct: true,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options: "To update the component state",
                correct: false,
            },
        ]
    },
    {
        id:25,
        question: "What is the purpose of the context API in React?",
        answers: [
            {
                options: "To manage component state",
                correct: false,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To create context providers",
                correct: false,
            },
            {
                options: "To share values like themes between components",
                correct: true,
            },
        ]
    },
    {
        id:26,
        question: "What is the purpose of the useImperativeHandle hook in React?",
        answers: [
            {
                options: "To modify the result of rendering",
                correct: false,
            },
            {
                options: "To create references to DOM elements",
                correct: true,
            },
            {
                options: "To manage component state",
                correct: false,
            },
            {
                options: "To handle user events",
                correct: false,
            },
        ]
    },
    {
        id:27,
        question: "What is the purpose of the getDerivedStateFromProps method in React?",
        answers: [
            {
                options: "To determine if a component should be re-rendered",
                correct: false,
            },
            {
                options: "To update the component state",
                correct: false,
            },
            {
                options: "To handle user events",
                correct: false,
            },
            {
                options: "To derive state from props before rendering",
                correct: true,
            },
        ]
    },
    {
        id:28,
        question: "What is the purpose of the react-router library?",
        answers: [
            {
                options: "To handle state management in React",
                correct: false,
            },
            {
                options: "To create higher-order components",
                correct: false,
            },
            {
                options: "To provide a routing solution for React applications",
                correct: true,
            },
            {
                options: "To optimize performance in React applications",
                correct: false,
            },
        ]
    },
    {
        id:29,
        question: "What is the purpose of the Redux library in React?",
        answers: [
            {
                options: "To handle state management in React",
                correct: true,
            },
            {
                options: "To create higher-order components",
                correct: false,
            },
            {
                options: "To provide a routing solution for React applications",
                correct: false,
            },
            {
                options: "To optimize performance in React applications",
                correct: false,
            },
        ]
    },
    {
        id:30,
        question: "What does JSX stand for?",
        answers: [
            {
                options: "JavaScript XML",
                correct: true,
            },
            {
                options: "JavaScript Extensible",
                correct: false,
            },
            {
                options: "Java XML",
                correct: false,
            },
            {
                options: "JavaX",
                correct: false,
            },
        ]
    },
]