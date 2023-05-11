



// export function fileToBase64(file) {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         resolve(reader.result);
//       });
//       reader.addEventListener("error", reject);
//       const blob = new Blob([file], { type: file.type });
//       reader.readAsDataURL(blob);
//     });
//   }


  
export function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })};