import { Link, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export function NavLink({ href, ...props }: Pick<NextLinkProps, 'href'> & ChakraLinkProps) {
  return (
    <NextLink {...{ href }} passHref>
      <Link as="a" {...props} />
    </NextLink>
  )
}
