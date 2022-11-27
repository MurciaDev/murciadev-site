import { useMemo } from 'react';

const remoteDictionary = {
  FLEX: 'Flexible',
  FULL: '100%',
  NONE: 'No',
};

export type Company = {
  address: string | null;
  location: string | null;
  name: string;
  remoteWork: 'FULL' | 'FLEX' | 'NONE' | null;
  stack: string | null;
  url: string;
};

interface UseTechHubTableProps {
  companies: Company[];
}

export default function useTechHubTable({ companies }: UseTechHubTableProps) {
  const tableColumns = useMemo(
    () => [
      { label: 'Nombre' },
      { label: 'Remoto' },
      { label: 'Stack' },
      { label: 'Ubicación' },
      { label: '' },
    ],
    []
  );

  const tableRows = useMemo(
    () =>
      companies?.map(({ address, location, name, remoteWork, stack, url }) => ({
        name: (
          <a href={url} rel="noreferrer nofollow" target="_blank">
            {name}
          </a>
        ),
        remote: remoteWork ? remoteDictionary[remoteWork] : '?',
        stack: stack || '?',
        location: location || '?',
        address: address && (
          <a
            href={`https://www.google.com/maps/search/${address}`}
            rel="noreferrer nofollow"
            target="_blank"
          >
            Ver dirección →
          </a>
        ),
      })),
    [companies]
  );

  return {
    tableRows,
    tableColumns,
  };
}
