import React, { Component, PropTypes } from 'react';
import mui, { Table, Card, CardHeader, CardActions } from 'material-ui';

class Playlist extends Component {

    render() {
        const { tracks } = this.props;

        let trackList = tracks.map((track, index, tracks) => {
            return {
                id: { "content": track.id + 1 },
                title: { "content": track.title },
                game: { "content": track.game }
            }
        });

        let headerColumns = {
            id: {
                content: "Track #",
                tooltip: "Track Number",
            },
            title: {
                content: "Title",
                tooltip: "The tracks title"
            },
            game: {
                content: "Game",
                tooltip: "The game the track is from"
            }
        }

        let tableColumnOrder = ['id', 'game', 'title'];

        return (
            <div className="playlist-container">
                <Card>
                    <CardHeader 
                        title="Song Title" 
                        subtitle="Game Title" />
                    <Table 
                        headerColumns={headerColumns}
                        rowData={trackList}
                        columnOrder={tableColumnOrder} 
                        selectable={false}
                        displayRowCheckbox={false}
                        showRowHover={true} 
                        preScanRowData={false}
                        canSelectAll={false}
                        multiSelectable={false}
                        displaySelectAll={false}
                        fixedHeader={true} />
                </Card>
            </div>
        )
    }
}

Playlist.propTypes = {
    tracks: PropTypes.array.isRequired,
}

export default Playlist;