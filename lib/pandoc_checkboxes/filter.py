#!/usr/bin/env python

"""
Pandoc filter to append checkboxes to bullet lists.
"""

import sys
from pandocfilters import toJSONFilter, BulletList, Para, Strong, RawBlock

def bulletlists(key, value, format, meta):
    checkbox = RawBlock('html', '<input type="checkbox" />')
    if key == 'BulletList':
        [x.insert(0, checkbox) for x in value]
        return BulletList(value)

if __name__ == '__main__':
    toJSONFilter(bulletlists)
