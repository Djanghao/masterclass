# Calculating Server Uptime in Full Days Using Pandas

**Author:** addejans
**Votes:** 5
**Link:** [https://leetcode.com/problems/server-utilization-time/solutions/5079652/](https://leetcode.com/problems/server-utilization-time/solutions/5079652/)

---

# Intuition
The problem involves calculating the total uptime of servers based on logs that indicate when each server was started and stopped. The first step is to understand the sequence of these events for each server. Given that servers can have multiple such events over a period, the challenge lies in accurately determining the durations between each start and its corresponding stop event. We need to ensure that every "start" is matched with the following "stop" to measure uptime correctly.

# Approach
To address this problem using pandas, a well-defined series of steps helps us mimic necessary operations for pairing start and stop events and calculating the total uptime:

1. **Data Preparation**: Convert the 'status_time' column to pandas datetime format, which facilitates time-based calculations, ensuring that duration operations are accurately handled.

2. **Sorting**: The DataFrame is sorted by `server_id` and `status_time` to arrange the logs in order. This organization is critical as it ensures that for each server, the events are lined up chronologically, setting the stage for the correct calculation of durations.

3. **Creating Time Pairs**: Utilize pandas' `shift()` function within groups defined by `server_id` to create a new column `stop_time` in the DataFrame. This column takes the timestamp from the next row within the same server group, effectively pairing each "start" event with the subsequent event's time as its "stop".

4. **Filtering Valid Sessions**: We filter to include only rows where `session_status` is 'start' and where the newly created `stop_time` is not null. This ensures we are considering only those sessions that have both a defined start and a stop, thus avoiding counting any sessions that do not have a clear end.

5. **Calculating Durations**: The difference between `start_time` and `stop_time` is calculated to obtain the duration of each session in seconds. This is achieved by subtracting the start time from the stop time and converting the resulting timedelta into seconds.

6. **Total Uptime Calculation**: Sum these session durations across the dataset to compute the total uptime in seconds. To translate this into full days, the total seconds are divided by the number of seconds in a day (86400), using floor division to obtain only complete days, which discards any remainder.

7. **Output**: The final result is formatted as a DataFrame, which succinctly presents the total uptime in full days, making it straightforward to interpret and verify.

This method leverages pandas' capabilities for handling datetime data and group-wise operations efficiently, providing a robust solution for calculating server uptime based on event logs.


# Code
```
# addejans

import pandas as pd

def server_utilization_time(servers: pd.DataFrame) -> pd.DataFrame:
    # Ensure the status_time is a datetime type
    servers['status_time'] = pd.to_datetime(servers['status_time'])
    
    # Sort the DataFrame by server_id and status_time
    servers_sorted = servers.sort_values(by=['server_id', 'status_time'])

    # Assign 'stop_time' as the 'status_time' of the next row within each 'server_id'
    servers_sorted['stop_time'] = servers_sorted.groupby('server_id')['status_time'].shift(-1)

    # Filter rows where session_status is 'start' and stop_time is not null
    running_time = servers_sorted[(servers_sorted['session_status'] == 'start') & (servers_sorted['stop_time'].notna())]

    # Calculate the total seconds between start and stop times
    running_time['uptime_seconds'] = (running_time['stop_time'] - running_time['status_time']).dt.total_seconds()

    # Calculate total uptime in full days
    total_uptime_days = running_time['uptime_seconds'].sum() / 86400
    total_uptime_days = int(total_uptime_days)  # Convert to integer to simulate the FLOOR function

    # Return the result as a DataFrame
    return pd.DataFrame({'total_uptime_days': [total_uptime_days]})
```