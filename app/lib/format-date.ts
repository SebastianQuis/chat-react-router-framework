export const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}