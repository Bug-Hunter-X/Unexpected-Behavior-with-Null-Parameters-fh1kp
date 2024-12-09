# Unexpected Behavior with Null Parameters

This repository demonstrates a common JavaScript bug involving unexpected behavior when null values are passed as function parameters.

## Bug Description

The `foo` function is intended to add two numbers. However, it handles null values in a way that may lead to unexpected results. If either `a` or `b` is null, the function returns 0, instead of perhaps returning the other parameter's value, or throwing an error indicating a problem with input data.

## Bug Solution

The solution demonstrates a better approach to handling null values. It checks for null values before performing the addition and returns a more appropriate result.