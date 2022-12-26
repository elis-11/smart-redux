- 1 follow this link:
https://redux-toolkit.js.org/tutorials/quick-start

- 2
npm install @reduxjs/toolkit react-redux

- 3
into srx/redux/store.js write:

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

- 4
in main.js:

import { Provider } from "react-redux";
import { store } from './redux/store'

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

