import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

// Context Props should be defined here,
// these are the values that will be passed to the context
interface MyContextProps {
  title: string;
  handleUpdateTitle: (newTitle: string) => void;
}

// This is the context that will be used by the components
const MyContext = createContext({} as MyContextProps);

// Provider props is only used here to define children type
interface MyContextProviderProps {
  children: ReactNode;
}

// This is the provider component that will be used to wrap the components
// whenever possible only export the provider component and a hook to use the context
export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  // By default, context components are stateless,
  // so we need to use useState to define the state, like this:
  const [title, setTitle] = useState("My awesome title");

  //However it's generally not a good idea to acess the state directly,
  // we could create a function to update the state, like this:
  const handleUpdateTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
  }, []);

  // The function can then be passed to the context provider as a prop,
  // along with any other props you might need from the context.
  // Remember that the provider should only be as high as the components that need it.
  // Try not to use the provider in the _app.tsx file, since it will be used by all components
  // and will cause all children to re-render.
  return (
    <MyContext.Provider value={{ title, handleUpdateTitle }}>
      {children}
    </MyContext.Provider>
  );
};

// This is the hook that will be used to access the context values
export const useMyContext = () => {
  return useContext(MyContext);
};
