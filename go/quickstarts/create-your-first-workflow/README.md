# Go - Workflow sample

### This project contains an example workflow using Go

Quickstart Guide is available [HERE](https://orkes.io/content/quickstarts/create-first-workflow).

## Getting started
### Using Orkes Conductor Developer Edition

1. Browse to https://developer.orkescloud.com/
2. On the left menu select **Access Control** > [**Applications**](https://developer.orkescloud.com/applicationManagement/applications)
3. Select `Create a New Application`
4. Give your application a unique name and hit `Save`
5. Set appropriate permissions for the application
  * _Note_: In Orkes Conductor Developer Edition new applications are pre-set with the following permissions:
    * **Unrestricted roles:** Admin
    * **Application roles:** Worker
6. Select `Create access key` button

> :bulb: **IMPORTANT:** Make sure to copy and save your `Key ID` and `Key Secret` somewhere safe. You will not be able to recover these after closing the window

### Use that access key in `workflow_as_code.go`

```go
const KEY_ID = "_CHANGE_ME_"
const SECRET = "_CHANGE_ME_"
```

```shell
go run workflow_as_code.go
```
