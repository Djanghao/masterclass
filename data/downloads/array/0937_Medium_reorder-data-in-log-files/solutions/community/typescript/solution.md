# Reoder Data in Log Files Solution

**Author:** myezasifiso
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/4491889/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/4491889/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially had to arrays which stored letter logs and digit logs, then sort letter logs and combine it with digit log at the end. 

# Approach
<!-- Describe your approach to solving the problem. -->
While sorting, controlled the sort to put digit log file at the end of the reodered log files.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Only a sort is used, O(n^2), which is the final time complexity

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
There are 4 variables declared for n loop of the sort, making it 4 * O(n^2) space complexity

# Code
```
function reorderLogFiles(logs: string[]): string[] {
    logs.sort((a, b) => {
        const [identifierA, lettersA] = getIdentifierAndLog(a)
        const [identifierB, lettersB] = getIdentifierAndLog(b)

        if(isLetterLog(lettersA) && !isLetterLog(lettersB)){
            return -1
        } else if(!isLetterLog(lettersA) && isLetterLog(lettersB)){
            return 1
        } else if(!isLetterLog(lettersA) && !isLetterLog(lettersB)){
            return 0
        }
        
        if(lettersA < lettersB){    
            return -1
        } else if(lettersA > lettersB){
            return 1
        } else {
            if(identifierA < identifierB){
                return -1
            } else if(identifierA > identifierB){
                return 1
            }

            return 0
        }
    })

    return logs  
};

function indexOfFirstWhiteSpace(text: string): number {
    return text.indexOf(' ');
}

function getIdentifierAndLog(text: string): string[] {
    return [text.slice(0, indexOfFirstWhiteSpace(text)), text.slice(indexOfFirstWhiteSpace(text) + 1)]
}

function isLetterLog(text: string): boolean {
    return isNaN(Number(text[text.length - 1]))
}
```