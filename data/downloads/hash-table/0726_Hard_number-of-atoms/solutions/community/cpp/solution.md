# ✅💯🔥Explanations No One Will Give You🎓🧠Very Detailed Approach🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 133
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5474227/](https://leetcode.com/problems/number-of-atoms/solutions/5474227/)

---

<blockquote>
        <p>
            <b>
                Making better choices takes work. There is a daily give and take, but it is worth the effort.
            </b>        
        </p>
        <p>
            --- Tom Rath ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a string `formula` which represents some valid chemical formula. Your task sounds very easy - you need to count chemical elements in this string (for details look description)

## \uD83D\uDCE5\u2935\uFE0F Input:
- String array `formula` representing a valid chemical formula 

## \uD83D\uDCE4\u2934\uFE0F Output:
Counted elements as new string sorted by elements' names (element followed by irs number in formula)

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach: Stack Of Hashmaps

# \uD83E\uDD14 Intuition
This problem just blew my mind. At first glance it seems like an easy task, but when you think about implementation...
- First of all, when problem asks you to process some string which contains brackets it's already a good tip for using stack.
- But what we want to store in stack? Since in one pair of brackets we can have multiple elements and since we want to somehow efficiently count them and multiply counters if we find multiplier after bracket it's a good choice to store every "pair of bracket" in stack as a hashmap (dictionary) where key is element's name and value is its counter for current bracket.
- Let's think about how we want to process characters in the `formula`:
    - First of all, as long as character we're considering now is not `"(" or ")"` we understand that we're looking at normal formula without brackets, so we will jave only letters and numbers. But where we want to add this counters? If are currently not in bracket then we want to add this counter to final result, in the other case we want to add this counter to the LAST pair of brackets we founded (this is idea behind using stack)
    - If we found `"("` all we want to do is to add new element in the stack -> just append empty hashmap to the stack.
    - If we found `")"` we know for sure that we have at least one element in stack. We want to parse multiplier for this bracket if it exists and then add counter multiplied by multiplier to the:
        - Result hashmap if there's no more elements in stack (this was one-level nesting and we ended up in normal formula without brackets)
        - Hashmap in stack that was before this, since that means that this pair of brackets was nested in some other pair
- After we counted all elements in result hashmap we want to sort them and create string as required in problem statement

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 

- Initialize `result_counter` as an empty dictionary to store the counts of each element.
- Initialize `parenthesis_stack` as an empty list to store dictionaries for counts of elements inside parentheses.
- Initialize `cur_ind` to 0 to serve as the current index while iterating through the formula.

- Start a while loop that runs until `cur_ind` is less than `n`.
- If `cur_char` is an opening parenthesis `(`:
  - Increment `cur_ind` by 1.
  - Append an empty dictionary to `parenthesis_stack`.
- If `cur_char` is a closing parenthesis `)`:
  - Initialize `mult` as an empty string to store the multiplier.
  - Increment `cur_ind` by 1.
  - While the current character is a digit, append it to `mult` and increment `cur_ind`.
  - Pop the last dictionary from `parenthesis_stack` into `last_counter`.
  - Set `target` to the last dictionary in `parenthesis_stack` if it exists, otherwise set it to `result_counter`.
  - For each element and count in `last_counter`, add the count multiplied by `mult` (or 1 if `mult` is empty) to the corresponding count in `target`.
- If `cur_char` is not any of brackets:
    - Initialize `cur_elem` as an empty string to store the current element.
    - Initialize `cur_counter` as an empty string to store the current element's count.
    - Set `target` to the last dictionary in `parenthesis_stack` if it exists, otherwise set it to `result_counter`.
    - While the current character is not a parenthesis and the index is within bounds:
        - If the character is an alphabet:
            - If the character is uppercase and `cur_elem` is not empty, add `cur_elem` to `target` with its count.
            - Reset `cur_counter` and `cur_elem`.
            - Append the character to `cur_elem`.
        - Otherwise, append the character to `cur_counter`.
        - Increment `cur_ind` by 1 and update `cur_char`.
    - Add the last element and its count to `target`.
- Construct the output by joining element names and their counts (if greater than 1) sorted by element names.
- Return the resulting string.

# \uD83D\uDCD8 Complexity Analysis
- \u23F0 Time complexity: O(n^2), since at the end we use sorting (n log n), but in the loop we constantly readding characters from hashmap to hashmap and in the worst case we will do this `n // 2` times with every hashmap containing up to `n - (number of brackets` so in total this result in `O(n^2)` TC
- \uD83E\uDDFA Space complexity: O(n), since `stack` will have size up to `n // 2` -> O(n)

# \uD83D\uDCBB Code
``` python []
class Solution:
    def countOfAtoms(self, formula: str) -> str:
        # will contain hash-maps with count of elements in last meeted brackets
        n: int = len(formula)
        result_counter: dict[str, int] = {}
        parenthesis_stack: list[dict[str, int]] = []
        cur_ind = 0

        while cur_ind < n:
            cur_char: str = formula[cur_ind]

            if cur_char == "(":
                cur_ind += 1
                parenthesis_stack.append({})
                continue

            if cur_char == ")":
                mult: str = ""
                cur_ind += 1

                while cur_ind < n and formula[cur_ind].isdigit():
                    mult += formula[cur_ind]
                    cur_ind += 1

                last_counter: dict[str, int] = parenthesis_stack.pop()
                target: dict[str, int] = parenthesis_stack[-1] if parenthesis_stack else result_counter
                for elem, counter in last_counter.items():
                    if elem not in target:
                        target[elem] = 0
                    target[elem] += counter * (int(mult) if mult else 1)
                continue

            cur_elem: str = ""
            cur_counter: str = ""
            target: dict[str, int] = parenthesis_stack[-1] if parenthesis_stack else result_counter

            while cur_ind < n and cur_char not in "()":
                if cur_char.isalpha():
                    if cur_char.isupper() and cur_elem != "":
                        if not cur_elem in target:
                            target[cur_elem] = 0
                        target[cur_elem] += int(cur_counter) if cur_counter else 1
                        cur_counter = ""
                        cur_elem = ""
                    cur_elem += cur_char
                else:
                    cur_counter += cur_char
                cur_ind += 1
                if cur_ind != n:
                    cur_char = formula[cur_ind]

            target = parenthesis_stack[-1] if parenthesis_stack else result_counter
            if not cur_elem in target:
                target[cur_elem] = 0
            target[cur_elem] += int(cur_counter) if cur_counter else 1

        parts: list[str] = [
            elem + str(counter) if not counter == 1 else elem for elem, counter in result_counter.items()
        ]
        parts.sort()

        return "".join(parts)
```
``` C++ []
class Solution {
public:
    string countOfAtoms(string formula) {
        int n = formula.length();
        unordered_map<string, int> result_counter;
        stack<unordered_map<string, int>> parenthesis_stack;
        int cur_ind = 0;

        while (cur_ind < n) {
            char cur_char = formula[cur_ind];

            if (cur_char == '(') {
                cur_ind++;
                parenthesis_stack.push(unordered_map<string, int>());
                continue;
            }

            if (cur_char == ')') {
                string mult_str = "";
                cur_ind++;

                while (cur_ind < n && isdigit(formula[cur_ind])) {
                    mult_str += formula[cur_ind];
                    cur_ind++;
                }

                int mult = mult_str.empty() ? 1 : stoi(mult_str);
                unordered_map<string, int> last_counter = parenthesis_stack.top();
                parenthesis_stack.pop();
                unordered_map<string, int>& target = parenthesis_stack.empty() ? result_counter : parenthesis_stack.top();
                
                for (const auto& [elem, counter] : last_counter) {
                    target[elem] += counter * mult;
                }
                continue;
            }

            string cur_elem = "";
            string cur_counter_str = "";
            unordered_map<string, int>& target = parenthesis_stack.empty() ? result_counter : parenthesis_stack.top();

            while (cur_ind < n && formula[cur_ind] != '(' && formula[cur_ind] != ')') {
                if (isalpha(formula[cur_ind])) {
                    if (isupper(formula[cur_ind]) && !cur_elem.empty()) {
                        target[cur_elem] += cur_counter_str.empty() ? 1 : stoi(cur_counter_str);
                        cur_elem = "";
                        cur_counter_str = "";
                    }
                    cur_elem += formula[cur_ind];
                } else {
                    cur_counter_str += formula[cur_ind];
                }
                cur_ind++;
            }

            target[cur_elem] += cur_counter_str.empty() ? 1 : stoi(cur_counter_str);
        }

        vector<string> parts;
        for (const auto& [elem, counter] : result_counter) {
            parts.push_back(elem + (counter == 1 ? "" : to_string(counter)));
        }
        sort(parts.begin(), parts.end());

        string result;
        for (const auto& part : parts) {
            result += part;
        }

        return result;
    }
};
```
``` JavaScript []
var countOfAtoms = function(formula) {
    const n = formula.length;
    const resultCounter = {};
    const parenthesisStack = [];
    let curInd = 0;

    while (curInd < n) {
        let curChar = formula[curInd];

        if (curChar === '(') {
            curInd++;
            parenthesisStack.push({});
            continue;
        }

        if (curChar === ')') {
            let multStr = '';
            curInd++;

            while (curInd < n && isDigit(formula[curInd])) {
                multStr += formula[curInd];
                curInd++;
            }

            const mult = multStr === '' ? 1 : parseInt(multStr, 10);
            const lastCounter = parenthesisStack.pop();
            const target = parenthesisStack.length === 0 ? resultCounter : parenthesisStack[parenthesisStack.length - 1];
            
            for (const [elem, counter] of Object.entries(lastCounter)) {
                if (!(elem in target)) {
                    target[elem] = 0;
                }
                target[elem] += counter * mult;
            }
            continue;
        }

        let curElem = '';
        let curCounterStr = '';
        let target = parenthesisStack.length === 0 ? resultCounter : parenthesisStack[parenthesisStack.length - 1];

        while (curInd < n && formula[curInd] !== '(' && formula[curInd] !== ')') {
            if (isAlpha(formula[curInd])) {
                if (isUpper(formula[curInd]) && curElem !== '') {
                    if (!(curElem in target)) {
                        target[curElem] = 0;
                    }
                    target[curElem] += curCounterStr === '' ? 1 : parseInt(curCounterStr, 10);
                    curElem = '';
                    curCounterStr = '';
                }
                curElem += formula[curInd];
            } else {
                curCounterStr += formula[curInd];
            }
            curInd++;
        }

        if (!(curElem in target)) {
            target[curElem] = 0;
        }
        target[curElem] += curCounterStr === '' ? 1 : parseInt(curCounterStr, 10);
    }

    const parts = [];
    for (const [elem, counter] of Object.entries(resultCounter)) {
        parts.push(elem + (counter === 1 ? '' : counter));
    }
    parts.sort();

    return parts.join('');
};

function isDigit(char) {
    return char >= '0' && char <= '9';
}

function isAlpha(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

function isUpper(char) {
    return char === char.toUpperCase();
}
```
``` Java []
class Solution {
    public String countOfAtoms(String formula) {
        int n = formula.length();
        Map<String, Integer> result_counter = new HashMap<>();
        Deque<Map<String, Integer>> parenthesis_stack = new ArrayDeque<>();
        int cur_ind = 0;

        while (cur_ind < n) {
            char cur_char = formula.charAt(cur_ind);

            if (cur_char == '(') {
                cur_ind++;
                parenthesis_stack.push(new HashMap<>());
                continue;
            }

            if (cur_char == ')') {
                StringBuilder mult_str = new StringBuilder();
                cur_ind++;

                while (cur_ind < n && Character.isDigit(formula.charAt(cur_ind))) {
                    mult_str.append(formula.charAt(cur_ind));
                    cur_ind++;
                }

                int mult = mult_str.length() == 0 ? 1 : Integer.parseInt(mult_str.toString());
                Map<String, Integer> last_counter = parenthesis_stack.pop();
                Map<String, Integer> target = parenthesis_stack.isEmpty() ? result_counter : parenthesis_stack.peek();
                
                for (Map.Entry<String, Integer> entry : last_counter.entrySet()) {
                    target.put(entry.getKey(), target.getOrDefault(entry.getKey(), 0) + entry.getValue() * mult);
                }
                continue;
            }

            StringBuilder cur_elem = new StringBuilder();
            StringBuilder cur_counter_str = new StringBuilder();
            Map<String, Integer> target = parenthesis_stack.isEmpty() ? result_counter : parenthesis_stack.peek();

            while (cur_ind < n && formula.charAt(cur_ind) != '(' && formula.charAt(cur_ind) != ')') {
                if (Character.isAlphabetic(formula.charAt(cur_ind))) {
                    if (Character.isUpperCase(formula.charAt(cur_ind)) && cur_elem.length() > 0) {
                        target.put(cur_elem.toString(), target.getOrDefault(cur_elem.toString(), 0) + (cur_counter_str.length() == 0 ? 1 : Integer.parseInt(cur_counter_str.toString())));
                        cur_elem = new StringBuilder();
                        cur_counter_str = new StringBuilder();
                    }
                    cur_elem.append(formula.charAt(cur_ind));
                } else {
                    cur_counter_str.append(formula.charAt(cur_ind));
                }
                cur_ind++;
            }

            target.put(cur_elem.toString(), target.getOrDefault(cur_elem.toString(), 0) + (cur_counter_str.length() == 0 ? 1 : Integer.parseInt(cur_counter_str.toString())));
        }

        List<String> parts = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : result_counter.entrySet()) {
            parts.add(entry.getKey() + (entry.getValue() == 1 ? "" : entry.getValue()));
        }
        Collections.sort(parts);

        StringBuilder result = new StringBuilder();
        for (String part : parts) {
            result.append(part);
        }

        return result.toString();
    }
}
```
``` C []
#define MAX_ELEMENTS 1000

typedef struct {
    char element[3];
    int count;
} Element;

typedef struct {
    Element elements[MAX_ELEMENTS];
    int size;
} Counter;

typedef struct {
    Counter stack[MAX_ELEMENTS];
    int top;
} Stack;

void initCounter(Counter* counter) {
    counter->size = 0;
}

void addElement(Counter* counter, const char* element, int count) {
    for (int i = 0; i < counter->size; ++i) {
        if (strcmp(counter->elements[i].element, element) == 0) {
            counter->elements[i].count += count;
            return;
        }
    }
    strcpy(counter->elements[counter->size].element, element);
    counter->elements[counter->size].count = count;
    counter->size++;
}

void multiplyCounter(Counter* counter, int factor) {
    for (int i = 0; i < counter->size; ++i) {
        counter->elements[i].count *= factor;
    }
}

void mergeCounters(Counter* target, const Counter* source) {
    for (int i = 0; i < source->size; ++i) {
        addElement(target, source->elements[i].element, source->elements[i].count);
    }
}

void push(Stack* stack, const Counter* counter) {
    stack->stack[++stack->top] = *counter;
}

Counter pop(Stack* stack) {
    return stack->stack[stack->top--];
}

int compareElements(const void* a, const void* b) {
    return strcmp(((Element*)a)->element, ((Element*)b)->element);
}

char* countOfAtoms(char* formula) {
    int n = strlen(formula);
    Counter resultCounter;
    initCounter(&resultCounter);
    Stack parenthesisStack;
    parenthesisStack.top = -1;
    int curInd = 0;

    while (curInd < n) {
        char curChar = formula[curInd];

        if (curChar == '(') {
            curInd++;
            Counter newCounter;
            initCounter(&newCounter);
            push(&parenthesisStack, &newCounter);
            continue;
        }

        if (curChar == ')') {
            char mult[10] = "";
            curInd++;

            while (curInd < n && isdigit(formula[curInd])) {
                strncat(mult, &formula[curInd], 1);
                curInd++;
            }

            int multiplier = mult[0] ? atoi(mult) : 1;
            Counter lastCounter = pop(&parenthesisStack);
            multiplyCounter(&lastCounter, multiplier);
            Counter* target = parenthesisStack.top >= 0 ? &parenthesisStack.stack[parenthesisStack.top] : &resultCounter;
            mergeCounters(target, &lastCounter);
            continue;
        }

        char curElem[3] = "";
        char curCounter[10] = "";
        Counter* target = parenthesisStack.top >= 0 ? &parenthesisStack.stack[parenthesisStack.top] : &resultCounter;

        while (curInd < n && formula[curInd] != '(' && formula[curInd] != ')') {
            if (isalpha(formula[curInd])) {
                if (isupper(formula[curInd]) && curElem[0] != '\\0') {
                    addElement(target, curElem, curCounter[0] ? atoi(curCounter) : 1);
                    curCounter[0] = '\\0';
                    curElem[0] = '\\0';
                }
                strncat(curElem, &formula[curInd], 1);
            } else {
                strncat(curCounter, &formula[curInd], 1);
            }
            curInd++;
        }

        addElement(target, curElem, curCounter[0] ? atoi(curCounter) : 1);
    }

    qsort(resultCounter.elements, resultCounter.size, sizeof(Element), compareElements);

    char* result = malloc(MAX_ELEMENTS * 10);
    result[0] = '\\0';
    for (int i = 0; i < resultCounter.size; ++i) {
        strcat(result, resultCounter.elements[i].element);
        if (resultCounter.elements[i].count > 1) {
            char countStr[10];
            sprintf(countStr, "%d", resultCounter.elements[i].count);
            strcat(result, countStr);
        }
    }

    return result;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
