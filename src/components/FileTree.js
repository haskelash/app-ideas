import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { Link } from 'react-router-dom';
import projects from '../projects';

export default () => {
  let treeItems = [];
  let index = 1;
  for (const [name] of Object.entries(projects)) {
    treeItems.push((
      <Link to={`/${name}`}>
        <TreeItem key={`${name}`} nodeId={`${name}`} label={name}/>
      </Link>
    ));
    index++;
  }

  return (
    <TreeView
      sx={{ backgroundColor: 'blue', flexGrow: 0, flexShrink: 0, overflowX: 'clip'}}
      aria-label='file system navigator'
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId='0' label='Projects'>
        {treeItems}
      </TreeItem>
    </TreeView>
  );
};
