# Finding available slots in rows and columns

**Author:** rvaguerra
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/5423864/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/5423864/)

---

# Intuition

Identifying slots - where you could place a word - and comparing filled letters with the word's.

# Approach

- Get columns and rows (segments)
- Extract slots from segments
- Check if word fits any segment

# Complexity
- Time complexity: $$O(m + n) = O(n)$$
- Space complexity: $$O(m + n) = O(n)$$

# Code
```
function getBoardRows(board: string[][]): string[] {
    const rows: string[] = [];
    for (let row = 0; row < board.length; row++) {
        rows.push(board[row].join(''));
    }
    return rows;
};

function getBoardColumns(board: string[][]): string[] {
    const columns: string[] = [];
    for (let column = 0; column < board[0].length; column++) {
        let columnData = '';
        for (let row = 0; row < board.length; row++) {
            columnData += board[row][column];
        }
        columns.push(columnData);
    }
    return columns;
};

function getSlots(segment: string): string[] {
    const slots: string[] = [];
    let slot = '';

    for (const c of segment) {
        if (c !== '#') {
            slot += c;
            continue;
        }

        // # found!
        if (slot !== '') {
            slots.push(slot);
        }
        slot = '';
    }

    if (slot !== '') {
        slots.push(slot);
    }

    return slots;
}

function wordFitsSlot(word: string, slot: string): boolean {
    // check if the word fits (also check it backwards)

    // NEC: count number of non empty "cells" in slot
    let nec = 0;
    // WM: count matches between slot and word
    let wm = 0;
    // BWM: count matches between slot and word backwards
    let bwm = 0;

    for (let i = 0; i < word.length; i++) {
        if (slot.at(i) !== ' ') {
            nec++;
        }

        if (slot.at(i) === word.at(i)) {
            wm++;
        }

        if (slot.at(i) === word.at(word.length - 1 - i)) {
            bwm++;
        }
    }

    // return NEC === WM || NEC === BWM
    return nec === wm || nec === bwm;
}

function placeWordInCrossword(board: string[][], word: string): boolean {
    // word.length -> how many cells are needed
    // horizontal vs vertical placement (also backwards)
        // horizontal -> easier
        // vertical -> trickier
    // look for "empty" slots
        // if the slot has characters, they should match the word's
    
    // get columns and rows
    const columnsAndRows = [
        ...getBoardRows(board),
        ...getBoardColumns(board),
    ];

    // iterate columns and rows
    for (const segment of columnsAndRows) {
        // identify slots => after # or start or column/row until # or end of column/row
        const slots = getSlots(segment);
        console.log({ segment, slots });

        // iterate slots
        for (const slot of slots) {
            // if size differs, exit
            if (slot.length !== word.length) {
                continue;
            }

            if (wordFitsSlot(word, slot)) {
                return true;
            }
        }
    }
    
    return false;
};
```