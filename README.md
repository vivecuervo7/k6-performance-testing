# Performance testing with k6

The sample test files have followed along from the documentation, but show some basic usage of scenarios, groups, thresholds and custom metrics.

## Running the tests

Run the tests with `run-tests.sh` or `k6 run ./main.ts`.

## Reports

If using the shell script, the necessary parameters will have been used to start a web browser session with a live dashboard, as well as outputting a report.

## Troubleshooting

On MacOS there were a lot of "connection reset by peer" errors. Changing the `kern.ipc.somaxconn` value seemed to resolve the issue to a degree, using the following command. Numbers may need to vary depending on your tests and machine. Bumping this up to 8192 allowed me to run some light tests with 1,000 concurrent users, where previously I was seeing a large number of failed requests.

```sh
sudo sysctl -w kern.ipc.somaxconn={DESIRED_VALUE}
```
