import React from 'react';
import { chakra, PropsOf, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const StyledLink = React.forwardRef(function StyledLink(
  props: PropsOf<typeof chakra.a> & { isActive?: boolean },
  ref: React.Ref<any>,
) {
  const { isActive, ...rest } = props;

  return (
    <chakra.a
      aria-current={isActive ? 'page' : undefined}
      width="100%"
      px="3"
      py="1"
      mt="2"
      rounded="md"
      ref={ref}
      fontSize="sm"
      fontWeight="500"
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      transition="all 0.2s"
      _activeLink={{
        bg: useColorModeValue('yellow.50', 'rgba(48, 140, 122, 0.3)'),
        color: useColorModeValue('yellow.500', 'yellow.300'),
        fontWeight: '600',
      }}
      {...rest}
    />
  );
});

type SidebarLinkProps = PropsOf<typeof chakra.div> & {
  href?: string;
  icon?: React.ReactElement;
};

export const SidebarLink = (props: SidebarLinkProps) => {
  const { href, icon, children, ...rest } = props;

  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <chakra.div userSelect="none" display="flex" alignItems="center" lineHeight="1.5rem" {...rest}>
      <NextLink href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </NextLink>
    </chakra.div>
  );
};
