const API_BASE_URL =  'http://localhost:3000/api';

export const http = async <T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`,{
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });
    if(!res.ok){
        const error = await res.text();
        throw new Error(error || "Request failed");
    }
    const response = await res.json();
    return response.data as Promise<T>;  //extracting the data since backend is returning an object containing success and data
};
