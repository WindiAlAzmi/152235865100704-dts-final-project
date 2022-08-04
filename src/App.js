import * as React from "react";
import { AuthProvider } from "./components/auth";
import Search from "./pages/Search";
import Home from "./containers/Home";
import CardPage from "./components/CardPage";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SearchCategory from "./pages/SearchCategory";
import SearchInput from "./pages/SearchInput";
import NoMatch from './components/NoMatch';
import ProctectedRoute from "./components/ProctectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col bg-slate-100 min-h-screen relative z-0">
       
        <Routes>
          <Route
            path="/"
            element={
              <ProctectedRoute>
                <Home />
              </ProctectedRoute>
            }
          />

          <Route
            path="cardDetail"
            element={
              <ProctectedRoute>
                <CardPage />
              </ProctectedRoute>
            }
          />

          <Route
            path="search"
            element={
              <ProctectedRoute>
                <Search />
              </ProctectedRoute>
            }
          />
          <Route
            path="/search/:productId"
            element={
              <ProctectedRoute>
                <CardPage />
              </ProctectedRoute>
            }
          />

          <Route
            path="/search/name/:id"
            element={
              <ProctectedRoute>
                <SearchInput />
              </ProctectedRoute>
            }
          />

          <Route
            path="/search/nameInput/:id"
            element={
              <ProctectedRoute>
                <SearchInput />
              </ProctectedRoute>
            }
          />

          <Route
            path="/search/nameInput/"
            element={
              <ProctectedRoute>
                <Search />
              </ProctectedRoute>
            }
          />

          <Route path="/search/category/:categoryId" element={
          <ProctectedRoute>
          <SearchCategory />
          </ProctectedRoute>
          } />

          <Route path="favorite/:productId" element={
          <ProctectedRoute>
            <CardPage />
            </ProctectedRoute>} />

          <Route
            path=":productId"
            element={
              <ProctectedRoute>
                <CardPage />
              </ProctectedRoute>
            }
          />

          <Route
            path="login"
            element={
              <ProctectedRoute loginOnly={false}>
                <Login />
              </ProctectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProctectedRoute loginOnly={false}>
                <Register />
              </ProctectedRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>

      
      </div>
    </AuthProvider>
  );
}

export default App;
