import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ZoomIn from "@material-ui/icons/ZoomIn";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: "",
    user: "",
    views: 0,
    downloads: 0
  };
  handleOpen = (image, user, views, downloads) => {
    this.setState({
      open: true,
      currentImg: image,
      user: user,
      views: views,
      downloads: downloads
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt="" />
              <GridListTileBar
                title={img.tags}
                subtitle={
                  <span>
                    by: <strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() =>
                      this.handleOpen(
                        img.largeImageURL,
                        img.user,
                        img.views,
                        img.downloads
                      )
                    }
                  >
                    <ZoomIn />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null; // can use spinner here
    }
    return (
      <div>
        {imageListContent}
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <DialogTitle>
            {`User: ${this.state.user} | Views: ${
              this.state.views
            } | Downloads: ${this.state.downloads}`}
          </DialogTitle>
          <DialogContent>
            <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
