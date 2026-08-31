# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/5621740/](https://leetcode.com/problems/logger-rate-limiter/solutions/5621740/)

---

```Java []
import java.util.HashMap;
import java.util.Map;

public class Logger {

    private static final int MIN_WAIT_TIME_BETWEEN_PRINTING = 10;
    private final Map<String, Integer> messageToLastPrintingTime = new HashMap<>();

    public boolean shouldPrintMessage(int timestamp, String message) {
        if (messageToLastPrintingTime.getOrDefault(message, -MIN_WAIT_TIME_BETWEEN_PRINTING)
                + MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp) {
            messageToLastPrintingTime.put(message, timestamp);
            return true;
        }
        return false;
    }
}
```
```JavaScript []
class Logger {

    static #MIN_WAIT_TIME_BETWEEN_PRINTING = 10;
    #messageToLastPrintingTime = new Map();

    /** 
     * @param {number} timestamp 
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {
        if (!this.#messageToLastPrintingTime.has(message) ||
             this.#messageToLastPrintingTime.get(message) + Logger.#MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp) {
             this.#messageToLastPrintingTime.set(message, timestamp);
            return true;
        }
        return false;
    }
}
```
```TypeScript []
class Logger {

    private static MIN_WAIT_TIME_BETWEEN_PRINTING = 10;
    private messageToLastPrintingTime = new Map();

    shouldPrintMessage(timestamp: number, message: string): boolean {
        if (!this.messageToLastPrintingTime.has(message) ||
            this.messageToLastPrintingTime.get(message) + Logger.MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp) {
            this.messageToLastPrintingTime.set(message, timestamp);
            return true;
        }
        return false;
    }
}
```
```C++ []
#include <string>
#include <unordered_map>
using namespace std;

class Logger {

    static const int MIN_WAIT_TIME_BETWEEN_PRINTING = 10;
    unordered_map<string, int> messageToLastPrintingTime;

public:
    bool shouldPrintMessage(int timestamp, const string& message) {
        if (!messageToLastPrintingTime.contains(message)||
            messageToLastPrintingTime[message]  + MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp) {
            messageToLastPrintingTime[message] = timestamp;
            return true;
        }
        return false;
    }
};
```
```C# []
using System;
using System.Collections.Generic;

public class Logger
{
    private static readonly int MIN_WAIT_TIME_BETWEEN_PRINTING = 10;
    private readonly Dictionary<string, int> messageToLastPrintingTime = new Dictionary<string, int>();

    public bool ShouldPrintMessage(int timestamp, string message)
    {
        if (messageToLastPrintingTime.GetValueOrDefault(message, -MIN_WAIT_TIME_BETWEEN_PRINTING)
            + MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp)
        {
            messageToLastPrintingTime[message] = timestamp;
            return true;
        }
        return false;
    }
}
```
```Kotlin []
class Logger() {

    private companion object {
        const val MIN_WAIT_TIME_BETWEEN_PRINTING = 10
    }

    private val messageToLastPrintingTime = HashMap<String, Int>()

    fun shouldPrintMessage(timestamp: Int, message: String): Boolean {
        if (messageToLastPrintingTime.getOrDefault(message, -MIN_WAIT_TIME_BETWEEN_PRINTING)
            + MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp) {
            messageToLastPrintingTime[message] = timestamp
            return true
        }
        return false
    }
}
```
```Go []
package main

import "fmt"

const MIN_WAIT_TIME_BETWEEN_PRINTING = 10

type Logger struct {
    messageToLastPrintingTime map[string]int
}

func Constructor() Logger {
    logger := Logger{
        messageToLastPrintingTime: map[string]int{},
    }
    return logger
}

func (this *Logger) ShouldPrintMessage(timestamp int, message string) bool {
    if lastPrintingTime, hasMessage := this.messageToLastPrintingTime[message]; 
      !hasMessage || lastPrintingTime+MIN_WAIT_TIME_BETWEEN_PRINTING <= timestamp {
        this.messageToLastPrintingTime[message] = timestamp
        return true
    }
    return false
}
```