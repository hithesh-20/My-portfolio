# HR Attrition & Workforce Analytics

A predictive workforce analytics model identifying key attrition drivers with 87% accuracy. Advanced feature engineering on employee demographics, performance metrics, and engagement data uncovered actionable retention insights, projecting 15% reduction in turnover through targeted HR interventions.

## Features

- **Attrition Prediction** - Machine learning model predicting employee turnover risk with 87% accuracy
- **Feature Engineering** - Comprehensive analysis of employee demographics, performance metrics, and engagement data
- **Retention Insights** - Actionable recommendations derived from key attrition drivers
- **Power BI Dashboard** - Interactive visualizations for HR stakeholders
- **Risk Scoring** - Employee-level attrition risk scores for targeted intervention planning

## Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Language    | Python 3.8+               |
| ML Library  | scikit-learn              |
| Data Processing | Pandas • NumPy        |
| Visualization | Power BI • Matplotlib  |
| Statistical Analysis | SciPy • Statsmodels |

## Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/hithesh-20/hr-attrition-analytics.git
    cd hr-attrition-analytics
    ```

2. **Install dependencies**

    ```bash
    pip install -r requirements.txt
    ```

3. **Run the analysis**

    ```bash
    python attrition_model.py
    ```

## Project Structure

```
hr-attrition-analytics/
├── data/
│   ├── employee_data.csv          # Raw employee dataset
│   └── processed_data.csv         # Feature-engineered dataset
├── notebooks/
│   ├── 01_data_exploration.ipynb  # EDA and data analysis
│   ├── 02_feature_engineering.ipynb # Feature creation and selection
│   └── 03_model_training.ipynb  # Model training and evaluation
├── src/
│   ├── data_preprocessing.py      # Data cleaning utilities
│   ├── feature_engineering.py     # Feature creation pipeline
│   ├── model.py                   # ML model definition
│   └── visualization.py           # Power BI dashboard exports
├── outputs/
│   ├── attrition_dashboard.pbix    # Power BI dashboard file
│   ├── feature_importance.png     # Top attrition factors visualization
│   └── model_metrics.json         # Model performance metrics
├── requirements.txt               # Python dependencies
└── README.md                      # Project documentation
```

## Key Findings

- **Model Accuracy**: 87% prediction accuracy on holdout test set
- **Top Attrition Drivers**: Job satisfaction, work-life balance, promotion frequency, and compensation ratio
- **Projected Impact**: 15% reduction in turnover through targeted interventions
- **Risk Categories**: Low, Medium, High, Critical risk segments identified for intervention prioritization

## License

MIT License - feel free to use this as a template for your own analytics projects!