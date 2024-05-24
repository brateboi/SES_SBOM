import codecs
import frida
import pngbin

def save_to_file_bin(data, filename):
  f = open(filename, "wb")
  f.write(data)
  

def save_to_file_png(data, filename):
  png = open(filename, 'wb')
  writer = pngbin.Writer(1000, 1000, png)
  written = writer.write(data)
  writer.finish()
  print("wrote", written, " bytes")

def on_message(message, data):
  print(data)
  # save_to_file_bin(data, "hexdumpOCV.bin")
  save_to_file_bin(data, "hexdumpVLCself.bin")
  # save_to_file_png(data, "hexdumpOCV.png")
  save_to_file_png(data, "hexdumpVLCself.png")

        

device = frida.get_usb_device()
# session = device.attach('OCV 15 Puzzle')
# session = device.attach('VLC')
session = device.attach('newtry')
# session = device.attach('DuckDuckGo')
# session = frida.attach('DuckDuckGo')
with codecs.open('./frida/hexdumpModule.js', 'r', 'utf-8') as f:
    source = f.read()
script = session.create_script(source)
script.on('message', on_message)
script.load()

session.detach()



