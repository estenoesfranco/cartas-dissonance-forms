import React, { createContext, useState } from "react";

// Crear el contexto
export const MiContexto = createContext();

function MiProvider({ children }) {
const [form, setForm] = useState(false);

return (
    <MiContexto.Provider value={{ form, setForm }}>
    {children}
    </MiContexto.Provider>
);
}

export default MiProvider;
