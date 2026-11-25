const baseUrl = "https://i5jyyj6c4h.execute-api.us-east-2.amazonaws.com/Dev/metagames";

export async function getMetagame(metagameId: number) {
    const response = await fetch(`${baseUrl}/${encodeURIComponent(metagameId)}`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

export async function createMetagame(metagameId: number) {
    const response = await fetch(
        `${baseUrl}/${metagameId}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({"metagameId":metagameId}),
    })
        .then((response) => {
        if (!response.ok) throw new Error('Network response failed');
        return response.json();
        })
        .catch((error) => {
        console.error('Error:', error);
        });

    return await response;
}