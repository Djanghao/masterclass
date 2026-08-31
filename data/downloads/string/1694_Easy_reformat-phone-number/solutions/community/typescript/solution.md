# Reformat Phone number

**Author:** dadundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-phone-number/solutions/5999304/](https://leetcode.com/problems/reformat-phone-number/solutions/5999304/)

---

# Intuition
Use regexp to remove unnecessary chars, then break into groups of 3, then lets lewhat to do with the last group.

# Approach
- Format the string
- Go by step +3 add groups
-- If on last step of 4, then add double group
-- If step is less then 4 length slice as usual

# Code
```typescript []
function reformatNumber(number: string): string {
    const formattedNum = number.replace(/-| /g, '');
    let result = [];

    for (let i = 0; i <= formattedNum.length; i += 3) {
        let group = '';

        if (formattedNum.length - i === 4) {
            result.push(`${formattedNum.slice(i, i + 2)}-${formattedNum.slice(i + 2)}`);
            break;
        }

        group = formattedNum.slice(i, i + 3);
        if (group.length) result.push(group);
    }

    return result.join('-')
};
```