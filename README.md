


## Installation
Run `npm install` command in root folder and backend folder
```
npm install 
```
## How to Run

```
npm run dev 
```


During my  testing process, here are some potential areas for improvement or issues that I  encounter in the Launch component:

## Unused Imports 
There are several unused imports in your Launch component, such as Icon from 'react-crypto-icons' and useViewportScroll from 'framer-motion'. Removing these unused imports can help reduce code clutter and improve readability.


 In the useEffect hook where you initialize the WalletConnect provider, ensure that the Infura ID placeholder 'YOUR_INFURA_ID' is replaced with my actual Infura ID. This is crucial for the proper functioning of the WalletConnect integration.

 Double-check the logic for conditional rendering based on the accessMode state. Ensure that the correct UI elements are displayed according to the selected access mode, and there are no inconsistencies or unexpected behaviors.


 Test the accessWalletWithPrivateKey and accessWalletWithKeyphrase functions thoroughly to ensure they send the correct data to the server and handle responses appropriately. Pay special attention to error handling and notification messages.


 I Check the styling and layout of the component across different screen sizes and devices. Ensure that the UI elements are properly aligned, responsive, and visually appealing for users.


 Conduct an accessibility audit of the component, focusing on keyboard navigation, screen reader compatibility, and proper focus management. Make sure all interactive elements are accessible to users with disabilities.

 Consider adding inline comments and documentation to clarify complex logic, function purposes, and any external dependencies used in the component. This can improve code maintainability and make it easier for other developers to understand and contribute to the codebase.


 