import codecs
import frida
import pngbin
import sys

# try to attach to app before starting up to hookLoadLibrary

# Function to attach to the target process
def attach_to_process(process_name):
    # Get the USB device (assuming the target is an Android device connected via USB)
    device = frida.get_usb_device()

    # Spawn the target process
    pid = device.spawn([process_name])
    print("Spawned process:", process_name, "with PID:", pid)

    # Attach to the spawned process
    session = device.attach(pid)
    print("Attached to process:", process_name)

    return session


# device = frida.get_usb_device()



session = attach_to_process('com.duckduckgo.mobile.android')

with codecs.open('./frida/hookLoadLibrary.js', 'r', 'utf-8') as f:
    source = f.read()
script = session.create_script(source)
# script.on('message', on_message)
script.load()


input("Press Enter to detach...")

# Clean up by resuming the process and detaching Frida
device = session.device
device.resume(session.pid)
session.detach()

# sys.stdin.read()


