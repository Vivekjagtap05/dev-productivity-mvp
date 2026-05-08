function generateInsights(metrics) {
    let insights = [];
    let suggestions = [];

    if (metrics.leadTime > 5) {
        insights.push("Lead time is high, delivery is slow.");
        suggestions.push("Improve PR review speed.");
    }

    if (metrics.cycleTime > 4) {
        insights.push("Cycle time is high, tasks are taking longer.");
        suggestions.push("Break tasks into smaller chunks.");
    }

    if (metrics.bugRate > 0.3) {
        insights.push("Bug rate is high, quality issues exist.");
        suggestions.push("Increase testing before deployment.");
    }

    if (metrics.deploymentFrequency < 5) {
        insights.push("Deployment frequency is low.");
        suggestions.push("Automate CI/CD pipeline.");
    }

    if (metrics.prThroughput < 15) {
        insights.push("PR throughput is low.");
        suggestions.push("Encourage smaller PRs and faster reviews.");
    }

    return { insights, suggestions };
}

module.exports = generateInsights;