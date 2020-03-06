import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Trans } from 'react-i18next';
import { worklogTables } from './worklogTables';
import { ButtonGroup, Button } from '@material-ui/core';
import TableComponent from './Table';

class WorklogTable extends React.Component {
  state = {
    TableCallState: false,
    id: 0,
  };

  handleClick = (event: any) => {
    this.setState({
      TableCallState: true,
      id: event.currentTarget.value,
    });
  };

  render() {
    return (
      <Box>
        <Box my={5}>
          <Typography align="center" variant="h4">
            <Trans>in:Worklog</Trans>
          </Typography>
        </Box>
        <Box>
          <Box className="button_group_parent">
            <ButtonGroup
              className="button_group"
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              {worklogTables.map(table => (
                <Button
                  className="button"
                  key={table.id.toString()}
                  onClick={this.handleClick}
                  value={table.id}
                >
                  <Trans>te:{table.id.toString()}.name</Trans>
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          {this.state.TableCallState ? (
            <TableComponent memberId={this.state.id} />
          ) : null}
        </Box>
      </Box>
    );
  }
}

export default WorklogTable;
