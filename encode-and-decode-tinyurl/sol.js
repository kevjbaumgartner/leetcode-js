// https://leetcode.com/problems/encode-and-decode-tinyurl/

// Alphanumeric definition
const alnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// Global variables
let map = [];

// Encode
encode = (longUrl) => {
	let str = "http://tinyurl.com/", urlPath = "";

	// Generate 8 character long unique alphanum-string
	for (let i = 0; i < 8; i++) {
		urlPath += alnum[Math.floor(Math.random() * alnum.length)];
	}
	str += urlPath;
	map[str] = longUrl; // Map the shortened URL to the longer URL
	return str;
}

// Decode
decode = (shortUrl) => {
	return map[shortUrl]; // Return the longer URL at index of the short URL
}