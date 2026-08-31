# javascript solution beats 100% using Greedy w/Notes

**Author:** Jeffreys_leetcode
**Votes:** 2
**Link:** [https://leetcode.com/problems/optimal-account-balancing/solutions/315644/](https://leetcode.com/problems/optimal-account-balancing/solutions/315644/)

---

Looks like this will be the first Javascript discussion posted so I am hoping that someone can help make this solution better... 

How it works: 
1. Create a new node for each person and calculate the NET amount of each person. (done in the first two for loops in "minTransfers")

2. For each person, test them as the first person to compare using 'CheckItems'. We will use each of the calculations to see at the end who has the lowest transaction amount.

3. Using the Greedy Algo: Find the max and min values in the rest of the nodes. From the two max/min values, look for the smaller absolute value of the two and decrease/increase your selected peoples(Min/Max) Net. Once you have updated the nodes, set a new Max/Min and move forward. (Main concept: We are just looking to payout the highest/lowest Net amounts first and making a count until everyone has reached 0.

4.  Return the lowest value from your findings.

```
function Node(number) {
    this.number = number;
    this.net = 0; 
}

var minTransfers = function(transactions) {
    let nodes = {};
    let lowest = [];
	// All im doing here is making a node of each person
    for (let i = 0; i < transactions.length; i++) {
        if (!nodes[transactions[i][0]]) {
            let current = new Node(transactions[i][0]);
            nodes[transactions[i][0]] = current;
        }
        if (!nodes[transactions[i][1]]) {
            let current1 = new Node(transactions[i][1]);
            nodes[transactions[i][1]] = current1;
        }
    }
   // Creating the net amounts for each node
    for (let j = 0; j < transactions.length; j++) {
        nodes[transactions[j][0]].net += transactions[j][2];
        nodes[transactions[j][1]].net -= transactions[j][2];
    }
    // See which starting person to pay back has the lowest transaction amount
    for (let node in nodes) {
        let copy = JSON.parse(JSON.stringify(nodes)); 
        lowest.push(checkItems(copy, nodes[node].number));    
    }
    return Math.min(...lowest);
};

const checkItems = (nodes, num) => {
    let max = num
    let min = findMin(nodes);
    let count = 0;
	// Payout one person at a time until 1 or both people you are comparing has a 0 balance
    while (nodes[max].net !== 0 || nodes[min].net !== 0) {
        let smaller = Math.min(nodes[max].net, -nodes[min].net);
		
        nodes[max].net -= smaller;
        nodes[min].net += smaller;
        count++;
        max = findMax(nodes);
        min = findMin(nodes);
    }
    return count;
}
//Finding Max net value helper 
const findMax = (nodes) => {
    let arr = Object.values(nodes);
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].net > max.net) {
            max = arr[i]
        }
    }
    return max.number;
}
//Finding Min net value helper 
const findMin = (nodes) => {
    let arr = Object.values(nodes);
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].net < min.net) {
            min = arr[i];
        }
    }
    return min.number;
}
```
