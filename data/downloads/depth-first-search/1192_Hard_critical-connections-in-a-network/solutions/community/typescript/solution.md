# JavaScript TypeScript Solution [ENG-RUS]

**Author:** GennadySorokin
**Votes:** 1
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/3880674/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/3880674/)

---

# Explanation
[ENG]
Our functions will use Tarjan's algorithm (a variation of Depth First Search) to search for critical connections in the network. The function criticalConnections takes the number of servers n and an array of connections and returns an array of critical connections. 
The TypeScript code also contains type annotations for code clarity and validation.

[RUS]
\u041D\u0430\u0448\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0422\u0430\u0440\u0434\u0436\u0430\u043D\u0430 (\u0440\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C Depth First Search) \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0439 \u0432 \u0441\u0435\u0442\u0438. \u0424\u0443\u043D\u043A\u0446\u0438\u044F criticalConnections \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 n \u0438 \u043C\u0430\u0441\u0441\u0438\u0432 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0439 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0439. 
\u041A\u043E\u0434 \u043D\u0430 \u044F\u0437\u044B\u043A\u0435 TypeScript \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u0438 \u0442\u0438\u043F\u043E\u0432 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u044F\u0441\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u0434\u0430 \u0438 \u0435\u0433\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438.

# JavaScript Code
```
function criticalConnections(n, connections) {
  const graph = buildGraph(n, connections);
  const discovery = new Array(n).fill(-1);
  const low = new Array(n).fill(-1);
  const result = [];
  let time = 0;

  function dfs(node, parent) {
    discovery[node] = time;
    low[node] = time;
    time++;

    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue;

      if (discovery[neighbor] === -1) {
        dfs(neighbor, node);
        low[node] = Math.min(low[node], low[neighbor]);

        if (low[neighbor] > discovery[node]) {
          result.push([node, neighbor]);
        }
      } else {
        low[node] = Math.min(low[node], discovery[neighbor]);
      }
    }
  }

  dfs(0, -1);
  return result;
}

function buildGraph(n, connections) {
  const graph = new Array(n).fill(null).map(() => []);
  for (const [from, to] of connections) {
    graph[from].push(to);
    graph[to].push(from);
  }
  return graph;
}
```

# TypeScript Code
```
function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = buildGraph(n, connections);
  const discovery: number[] = new Array(n).fill(-1);
  const low: number[] = new Array(n).fill(-1);
  const result: number[][] = [];
  let time: number = 0;

  function dfs(node: number, parent: number) {
    discovery[node] = time;
    low[node] = time;
    time++;

    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue;

      if (discovery[neighbor] === -1) {
        dfs(neighbor, node);
        low[node] = Math.min(low[node], low[neighbor]);

        if (low[neighbor] > discovery[node]) {
          result.push([node, neighbor]);
        }
      } else {
        low[node] = Math.min(low[node], discovery[neighbor]);
      }
    }
  }

  dfs(0, -1);
  return result;
}

function buildGraph(n: number, connections: number[][]): number[][] {
  const graph: number[][] = new Array(n).fill(null).map(() => []);
  for (const [from, to] of connections) {
    graph[from].push(to);
    graph[to].push(from);
  }
  return graph;
}
```