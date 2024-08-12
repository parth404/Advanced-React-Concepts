export function wait(data, duration){
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(data);
        }, duration);
    }); 
}