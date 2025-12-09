/**
 * URL utility functions for managing query parameters
 */

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

/**
 * Adds or updates a query parameter in the URL
 */
export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = new URLSearchParams(params);

  if (value) {
    currentUrl.set(key, value);
  } else {
    currentUrl.delete(key);
  }

  return currentUrl.toString();
};

/**
 * Removes specified keys from URL query parameters
 */
export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const currentUrl = new URLSearchParams(params);

  keysToRemove.forEach((key) => {
    currentUrl.delete(key);
  });

  return currentUrl.toString();
};
