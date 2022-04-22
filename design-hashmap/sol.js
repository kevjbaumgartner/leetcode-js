// https://leetcode.com/problems/design-hashmap/

var MyHashMap = function () {
	this.hashMap = {}
};

MyHashMap.prototype.put = function (key, value) {
	this.hashMap[key] = value
};

MyHashMap.prototype.get = function (key) {
	return (this.hashMap[key] === undefined ? -1 : this.hashMap[key])
};

MyHashMap.prototype.remove = function (key) {
	delete this.hashMap[key]
};