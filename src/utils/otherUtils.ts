export const getMax = <T, K extends keyof T>(data: T[], key: K) =>
    data.reduce(
        (max, p) => p[key] > max ? p[key] : max, data[0][key]
    );
