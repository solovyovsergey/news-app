export const api = async <T extends {}>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const json: { data: T } = await response.json();
    return json.data;
}
