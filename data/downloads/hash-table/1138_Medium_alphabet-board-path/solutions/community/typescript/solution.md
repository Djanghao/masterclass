# Using division by 5 to decide the directions

**Author:** vmss
**Votes:** 1
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/5346691/](https://leetcode.com/problems/alphabet-board-path/solutions/5346691/)

---

You can get it better if you can go through the code

# Code
```
function alphabetBoardPath(target: string): string {

    let result = '';

    for(let i = 0; i < target.length; i++) {
        let prev = target[i-1];
        console.log('current variable : ', target[i], prev);
        if(!prev) {
            const c = get_coordinates(target[i]);
            result += get_path(c[0], c[1]);
            continue;
        }
        const c1 = get_coordinates(prev);
        const c2 = get_coordinates(target[i]);

        console.log('prev, current and their coordinates : ', prev, target[i], c1, c2);

        result += get_path(c2[0] - c1[0], c2[1] - c1[1]);
    }

    return result;

};

const get_coordinates = (char : string) => {
    let diff = char.charCodeAt(0) - 'a'.charCodeAt(0);

    let h = diff % 5;

    let v = (diff - diff % 5)/5;

    return [v, h];
}

const get_path = (v : number, h : number) => {
    let horizontal = '';
    let vertical = '';
    for(let i = 0; i < Math.abs(v); i ++) {
        if(v > 0) {
            vertical += 'D';
        }
        if(v < 0) {
            vertical += 'U';
        }
    }

    for(let i = 0; i < Math.abs(h); i++) {
        if(h > 0) {
            horizontal += 'R';
        }
        if(h < 0) {
            horizontal += 'L';
        }
    }
    return (v < 0 ? (vertical + horizontal) : (horizontal + vertical)) + '!';
}
```