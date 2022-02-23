import { useState } from "react";

// can use hooks inside other hooks

export function useInput(initialValue) {
    const [value, setValue] = useState(
        initialValue
    );

    return [
        { value, onChange: (e) => setValue(e.target.value) },
        () => setValue(initialValue)
    ]
}