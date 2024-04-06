// FUNCTION TO HANDLE USER SIGNUP
export const signUpUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to sign up user: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error signing up user:', error);
      throw error;
    }
  };
  
  // FUNCTION TO HANDLE USER LOGIN
  export const loginUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to login user: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  };
  