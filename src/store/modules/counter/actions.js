export const increase = (number) => {
    return {
        type: "INCREASE",
        number,
    };
};

export const decrease = (number) => {
    return {
        type: "DECREASE",
        number,
    };
};