export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

/**
 * Fetch data using a GET request.
 * @param url - The endpoint URL.
 * @param options - Additional fetch options.
 * @returns The parsed JSON response.
 */
export const fetchData = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `Fetch failed with status: ${response.status} (${response.statusText})`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
  }
};

/**
 * Send data using a POST request.
 * @param url - The endpoint URL.
 * @param data - The body payload.
 * @param options - Additional fetch options.
 * @returns The parsed JSON response.
 */
export const postData = async <T, R>(
  url: string,
  data: T,
  options: FetchOptions = {}
): Promise<R> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      body: JSON.stringify(data),
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `Post failed with status: ${response.status} (${response.statusText})`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('API Post Error:', error);
    throw error;
  }
};

/**
 * Generic request handler for any HTTP method.
 * @param url - The endpoint URL.
 * @param options - Fetch options including method, headers, and body.
 * @returns The parsed JSON response.
 */
export const request = async <T>(
  url: string,
  options: FetchOptions
): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `Request failed with status: ${response.status} (${response.statusText})`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
