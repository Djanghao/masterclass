# Simple Pandas Solution

**Author:** addejans
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-top-performing-driver/solutions/5849912/](https://leetcode.com/problems/find-top-performing-driver/solutions/5849912/)

---

# Code
```pythondata []
import pandas as pd

def get_top_performing_drivers(drivers_df, vehicles_df, trips_df):
    # Step 1: Merge the DataFrames
    merged_df = pd.merge(trips_df, vehicles_df, on='vehicle_id', how='inner')
    merged_df = pd.merge(merged_df, drivers_df, on='driver_id', how='inner')

    # Step 2: Group by fuel_type, driver_id, and accidents to calculate avg_rating and total_distance
    performance_df = merged_df.groupby(['fuel_type', 'driver_id', 'accidents']).agg(
        avg_rating=('rating', lambda x: round(x.mean(), 2)),
        total_distance=('distance', 'sum')
    ).reset_index()

    # Step 3: Sort by fuel_type, avg_rating (descending), total_distance (descending), and accidents (ascending)
    performance_df = performance_df.sort_values(
        by=['fuel_type', 'avg_rating', 'total_distance', 'accidents'], 
        ascending=[True, False, False, True]
    )

    # Step 4: Rank drivers per fuel_type (selecting the top one for each fuel_type)
    top_performers_df = performance_df.groupby('fuel_type').head(1).reset_index(drop=True)

    # Step 5: Return the final result with the required columns
    result_df = top_performers_df[['fuel_type', 'driver_id', 'avg_rating', 'total_distance']]
    result_df.rename(columns={'avg_rating': 'rating', 'total_distance': 'distance'}, inplace=True)
    
    return result_df
```