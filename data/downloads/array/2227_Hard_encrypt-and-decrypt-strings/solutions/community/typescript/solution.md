# TypeScript and JavaScript solution

**Author:** jacintolutrezehue
**Votes:** 0
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/5950935/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/5950935/)

---



# Code
```typescript []
class Encrypter {
    private encryptMap: Map<string, string>;
    private decryptMap: Map<string, string[]>;
    private encryptedFrequency: Map<string, number>;

    constructor(keys: string[], values: string[], dictionary: string[]) {
        this.encryptMap = new Map();
        this.decryptMap = new Map();
        this.encryptedFrequency = new Map();

        for (let i = 0; i < keys.length; i++) {
            this.encryptMap.set(keys[i], values[i]);
            if (!this.decryptMap.has(values[i])) {
                this.decryptMap.set(values[i], []);
            }
            this.decryptMap.get(values[i])!.push(keys[i]);
        }

        for (const word of dictionary) {
            const encryptedWord = this.encrypt(word);
            if (encryptedWord !== "") {
                this.encryptedFrequency.set(
                    encryptedWord,
                    (this.encryptedFrequency.get(encryptedWord) || 0) + 1
                );
            }
        }
    }

    encrypt(word1: string): string {
        let encrypted = '';

        for (let char of word1) {
            if (!this.encryptMap.has(char)) return "";
            encrypted += this.encryptMap.get(char);
        }

        return encrypted;
    }

    decrypt(word2: string): number {
        return this.encryptedFrequency.get(word2) || 0;
    }
}

```

```JavaScript []
/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function(keys, values, dictionary) {
    this.encryptMap = new Map();
    this.decryptMap = new Map();
    this.encryptedFrequency = new Map();

    for (let i = 0; i < keys.length; i++) {
        this.encryptMap.set(keys[i], values[i]);
        if (!this.decryptMap.has(values[i])) {
            this.decryptMap.set(values[i], []);
        }
        this.decryptMap.get(values[i]).push(keys[i]);
    }

    for (const word of dictionary) {
        const encryptedWord = this.encrypt(word);
        if (encryptedWord !== "") {
            this.encryptedFrequency.set(
                encryptedWord,
                (this.encryptedFrequency.get(encryptedWord) || 0) + 1
            );
        }
    }
};

/** 
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function(word1) {
    let encrypted = '';

    for (let char of word1) {
        if (!this.encryptMap.has(char)) return "";
        encrypted += this.encryptMap.get(char);
    }

    return encrypted;
};

/** 
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function(word2) {
    return this.encryptedFrequency.get(word2) || 0;
};

/** 
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */


```