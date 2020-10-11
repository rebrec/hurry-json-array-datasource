export default {
    "caption": "Json Array Custom Actions",
    "type": "CONTAINER",
    "children": [
        {
            "description": "Do something",
            "caption": "Ping",
            "shell": "cmd",
            "type": "COMMAND",
            "platform": "win32",
            "commands": [
                "start \"ping -t #{hostname}\" cmd /k echo hello"
            ]
        },
        {
            "description": "Launch Bash",
            "caption": "Ping",
            "shell": "bash",
            "type": "COMMAND",
            "platform": "linux",
            "commands": [
                "xterm -e \"/bin/bash\""
            ]
        }
    ]
}